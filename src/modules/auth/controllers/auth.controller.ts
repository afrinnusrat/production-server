import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    UseInterceptors,
    UseGuards,
    Patch,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { AuthUser } from '../../../decorators/auth-user.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { UserEntity } from '../../user/models/user.entity';
import { UserService } from '../../user/services/user.service';
import { AuthService } from '../services/auth.service';
import { LoginPayloadDto } from '../dto/login-payload.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { UserRegisterDto } from '../dto/user-register.dto';
import { RegisterPayloadDto } from '../dto/register-payload.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(
        public readonly userService: UserService,
        public readonly authService: AuthService,
    ) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: 'User info with access token',
    })
    async userLogin(
        @Body() userLoginDto: UserLoginDto,
    ): Promise<LoginPayloadDto> {
        const userEntity = await this.authService.validateUser(userLoginDto);

        const [token] = await Promise.all([
            await this.authService.createToken(userEntity),
            await this.userService.setLastLoginDate(userEntity),
        ]);

        return new LoginPayloadDto(token);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: RegisterPayloadDto,
        description: 'Successfully Registered',
    })
    async userRegister(
        @Body() userRegisterDto: UserRegisterDto,
    ): Promise<RegisterPayloadDto> {
        const [
            createdUser,
            createdUserAuth,
            createdUserSalary,
        ] = await this.userService.createUser(userRegisterDto);

        return new RegisterPayloadDto(
            createdUser.toDto(),
            createdUserAuth.toDto(),
            createdUserSalary.toDto(),
        );
    }

    @Patch('logout')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @UseInterceptors(AuthUserInterceptor)
    @ApiBearerAuth()
    @ApiOkResponse({
        description: 'Successfully logout',
    })
    async userLogout(@AuthUser() user: UserEntity): Promise<void> {
        await this.userService.setLastLogoutDate(user);
    }
}

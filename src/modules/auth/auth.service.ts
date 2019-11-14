import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '../../shared/services/config.service';
import { UserEntity } from '../user/user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';
import { UtilsService } from '../../providers/utils.service';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dto/user.dto';
import { ContextService } from '../../providers/context.service';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { UserAuthService } from 'modules/user/user-auth.service';
import { UserAuthEntity } from 'modules/user/user-auth.entity';
import { UserAuthDto } from 'modules/user/dto/user-auth.dto';

@Injectable()
export class AuthService {
    private static _authUserKey = 'user_key';

    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly userService: UserService,
        public readonly userAuthService: UserAuthService,
    ) {}

    async createToken(
        user: UserAuthEntity | UserAuthDto,
    ): Promise<TokenPayloadDto> {
        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({ id: user.id }),
        });
    }

    async validateUser(userLoginDto: UserLoginDto): Promise<UserAuthEntity> {
        const userAuth = await this.userAuthService.findOne({
            login: userLoginDto.login,
        });
        const isPasswordValid = await UtilsService.validateHash(
            userLoginDto.password,
            userAuth && userAuth.password,
        );
        if (!userAuth || !isPasswordValid) {
            throw new UserNotFoundException();
        }
        return userAuth;
    }

    static setAuthUser(userAuth: UserAuthEntity) {
        ContextService.set(AuthService._authUserKey, userAuth);
    }

    static getAuthUser(): UserAuthEntity {
        return ContextService.get(AuthService._authUserKey);
    }
}

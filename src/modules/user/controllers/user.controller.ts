'use strict';

import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { RolesGuard } from '../../../guards/roles.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { UsersPageOptionsDto } from '../dto/users-page-options.dto';
import { UsersPageDto } from '../dto/users-page.dto';
import { UserService } from '../services/user.service';

@Controller('users')
@ApiTags('Users')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class UserController {
    constructor(private _userService: UserService) {}

    @Get('/')
    @Roles(RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get users list',
        type: UsersPageDto,
    })
    getUsers(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: UsersPageOptionsDto,
    ): Promise<UsersPageDto | any> {
        return this._userService.getUsers(pageOptionsDto);
    }
}

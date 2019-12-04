'use strict';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserDto } from './user.dto';
import { UserEntity } from '../models/user.entity';

export class UserAuthDto extends AbstractDto {
    @ApiProperty({ enum: RoleType })
    role: RoleType;

    @ApiProperty()
    login: number;

    @ApiPropertyOptional()
    password: string;

    constructor(userAuth: UserAuthEntity) {
        super(userAuth);
        this.role = userAuth.role;
        this.login = userAuth.login;
        this.password = userAuth.password;
    }
}

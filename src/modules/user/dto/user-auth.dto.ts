'use strict';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserAuthEntity } from '../user-auth.entity';
import { UserDto } from './user.dto';
import { UserEntity } from '../user.entity';

export class UserAuthDto extends AbstractDto {
    @ApiModelProperty({ enum: RoleType })
    role: RoleType;

    @ApiModelProperty()
    login: number;

    @ApiModelPropertyOptional()
    password: string;

    @ApiModelProperty({ type: UserDto })
    user: UserEntity;

    constructor(userAuth: UserAuthEntity) {
        super(userAuth);
        this.role = userAuth.role;
        this.login = userAuth.login;
        this.password = userAuth.password;
        this.user = userAuth.user;
    }
}

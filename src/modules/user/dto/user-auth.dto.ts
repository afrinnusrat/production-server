'use strict';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserAuthEntity } from '../user-auth.entity';
import { UserDto } from './user.dto';

export class UserAuthDto extends AbstractDto {
    @ApiModelProperty({ enum: RoleType })
    role: RoleType;

    @ApiModelProperty()
    login: number;

    @ApiModelPropertyOptional()
    password: string;

    constructor(userAuth: UserAuthEntity) {
        super(userAuth);
        this.role = userAuth.role;
        this.login = userAuth.login;
        this.password = userAuth.password;
    }
}

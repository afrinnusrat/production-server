'use strict';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserEntity } from '../user.entity';
import { UserAuthEntity } from '../user-auth.entity';
import { UserAuthDto } from './user-auth.dto';
import { UserSalaryDto } from './user-salary.dto';
import { UserSalaryEntity } from '../user-salary.entity';

export class UserDto extends AbstractDto {
    @ApiModelProperty()
    firstName: string;

    @ApiModelProperty()
    lastName: string;

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    phone: string;

    @ApiModelProperty()
    street: string;

    @ApiModelProperty()
    city: string;

    @ApiModelProperty()
    state: string;

    @ApiModelProperty()
    zip: string;

    @ApiModelProperty({ format: 'date' })
    createdAt: string;

    @ApiModelPropertyOptional({ format: 'date-time' })
    lastLogin: string;

    @ApiModelPropertyOptional({ format: 'date-time' })
    lastLogout: string;

    @ApiModelProperty({ type: UserAuthDto })
    userAuth: UserAuthEntity;

    @ApiModelProperty({ type: UserSalaryDto })
    userSalary: UserSalaryEntity;

    constructor(user: UserEntity) {
        super(user);
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
        this.street = user.street;
        this.city = user.city;
        this.state = user.state;
        this.zip = user.zip;
        this.createdAt = user.createdAt;
        this.lastLogin = user.lastLogin;
        this.lastLogout = user.lastLogout;
        this.userAuth = user.userAuth;
        this.userSalary = user.userSalary;
    }
}

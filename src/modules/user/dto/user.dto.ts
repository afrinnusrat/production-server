'use strict';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserEntity } from '../models/user.entity';
import { UserAuthDto } from './user-auth.dto';
import { UserSalaryDto } from './user-salary.dto';
import { IUser } from '../interfaces/user.interface';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserSalaryEntity } from '../models/user-salary.entity';

export class UserDto extends AbstractDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    zip: string;

    @ApiProperty({ format: 'date' })
    createdAt: string;

    @ApiPropertyOptional({ format: 'date-time' })
    lastLogin: string;

    @ApiPropertyOptional({ format: 'date-time' })
    lastLogout: string;

    @ApiProperty({ type: UserAuthDto })
    userAuth: UserAuthDto;

    @ApiProperty({ type: UserSalaryDto })
    userSalary: UserSalaryDto;

    constructor(
        user: UserEntity,
        relations: { userAuth: UserAuthDto; userSalary: UserSalaryDto },
    ) {
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
        this.userAuth = relations.userAuth;
        this.userSalary = relations.userSalary;
    }
}

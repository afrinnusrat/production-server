'use strict';

import { UserDto } from '../../user/dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UserAuthDto } from 'modules/user/dto/user-auth.dto';
import { UserSalaryDto } from 'modules/user/dto/user-salary.dto';

export class RegisterPayloadDto {
    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ type: UserAuthDto })
    userAuth: UserAuthDto;

    @ApiProperty({ type: UserSalaryDto })
    userSalary: UserSalaryDto;

    constructor(
        user: UserDto,
        userAuth: UserAuthDto,
        userSalary: UserSalaryDto,
    ) {
        this.user = user;
        this.userAuth = userAuth;
        this.userSalary = userSalary;
    }
}

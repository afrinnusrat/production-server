'use strict';

import { UserDto } from '../../user/dto/user.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserAuthDto } from 'modules/user/dto/user-auth.dto';
import { UserSalaryDto } from 'modules/user/dto/user-salary.dto';

export class RegisterPayloadDto {
    @ApiModelProperty({ type: UserDto })
    user: UserDto;

    @ApiModelProperty({ type: UserAuthDto })
    userAuth: UserAuthDto;

    @ApiModelProperty({ type: UserSalaryDto })
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

'use strict';

import { TokenPayloadDto } from './token-payload.dto';
import { UserDto } from '../../user/dto/user.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserAuthDto } from 'modules/user/dto/user-auth.dto';
import { UserSalaryDto } from 'modules/user/dto/user-salary.dto';

export class LoginPayloadDto {
    @ApiModelProperty({ type: TokenPayloadDto })
    token: TokenPayloadDto;

    constructor(token: TokenPayloadDto) {
        this.token = token;
    }
}

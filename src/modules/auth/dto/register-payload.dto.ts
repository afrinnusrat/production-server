'use strict';

import { UserDto } from '../../user/dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterPayloadDto {
    @ApiProperty({ type: UserDto })
    user: UserDto;

    constructor(user: UserDto) {
        this.user = user;
    }
}

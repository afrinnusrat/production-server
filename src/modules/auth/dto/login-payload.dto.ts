'use strict';

import { TokenPayloadDto } from './token-payload.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LoginPayloadDto {
    @ApiProperty({ type: TokenPayloadDto })
    token: TokenPayloadDto;

    constructor(token: TokenPayloadDto) {
        this.token = token;
    }
}

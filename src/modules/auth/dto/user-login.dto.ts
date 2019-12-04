'use strict';

import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
    @IsNumber()
    @ApiProperty()
    readonly login: number;

    @IsString()
    @ApiProperty()
    readonly password: string;
}

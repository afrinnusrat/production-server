'use strict';

import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserLoginDto {
    @IsNumber()
    @ApiModelProperty()
    readonly login: number;

    @IsString()
    @ApiModelProperty()
    readonly password: string;
}

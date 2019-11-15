'use strict';

import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CustomerRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly email: string;

    @IsPhoneNumber('ZZ')
    @IsNotEmpty()
    @ApiModelProperty()
    readonly phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly street: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly city: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly state: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly zip: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly tax: string;
}

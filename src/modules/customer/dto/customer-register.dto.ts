'use strict';

import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @IsPhoneNumber('ZZ')
    @IsNotEmpty()
    @ApiProperty()
    readonly phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly street: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly city: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly state: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly zip: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly tax: string;
}

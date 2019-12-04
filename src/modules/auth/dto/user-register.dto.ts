'use strict';

import {
    IsString,
    IsEmail,
    MinLength,
    IsNotEmpty,
    IsPhoneNumber,
    IsOptional,
    IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RoleType } from 'common/constants/role-type';
import { ContractType } from 'common/constants/contract-type';

export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

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

    @IsEnum(RoleType)
    @IsOptional()
    @ApiPropertyOptional({ enum: RoleType })
    readonly role: RoleType;

    @IsString()
    @MinLength(6)
    @IsOptional()
    @ApiPropertyOptional({ minLength: 6 })
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly salary: number;

    @IsEnum(ContractType)
    @IsNotEmpty()
    @ApiProperty({ enum: ContractType })
    readonly contractType: ContractType;
}

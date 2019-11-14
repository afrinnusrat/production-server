'use strict';

import {
    IsString,
    IsEmail,
    MinLength,
    IsNotEmpty,
    IsPhoneNumber,
    IsOptional,
    IsEnum,
    IsDecimal,
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { RoleType } from 'common/constants/role-type';
import { ContractType } from 'common/constants/contract-type';

export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly lastName: string;

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

    @IsEnum(RoleType)
    @IsOptional()
    @ApiModelPropertyOptional({ enum: RoleType })
    readonly role: RoleType;

    @IsString()
    @MinLength(6)
    @IsOptional()
    @ApiModelPropertyOptional({ minLength: 6 })
    readonly password: string;

    @IsNotEmpty()
    @ApiModelProperty()
    readonly salary: number;

    @IsEnum(ContractType)
    @IsNotEmpty()
    @ApiModelProperty({ enum: ContractType })
    readonly contractType: ContractType;
}

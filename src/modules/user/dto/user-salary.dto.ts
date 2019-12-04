'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { UserEntity } from '../models/user.entity';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ContractType } from '../../../common/constants/contract-type';
import { UserSalaryEntity } from '../models/user-salary.entity';
import { UserDto } from './user.dto';

export class UserSalaryDto extends AbstractDto {
    @ApiProperty()
    salary: number;

    @ApiProperty({ enum: ContractType })
    contractType: ContractType;

    @ApiProperty({ format: 'date' })
    updatedAt: string;

    constructor(userSalary: UserSalaryEntity) {
        super(userSalary);
        this.salary = userSalary.salary;
        this.contractType = userSalary.contractType;
        this.updatedAt = userSalary.updatedAt;
    }
}

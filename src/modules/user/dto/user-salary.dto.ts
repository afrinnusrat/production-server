'use strict';

import { ApiModelProperty } from '@nestjs/swagger';

import { UserEntity } from '../user.entity';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ContractType } from '../../../common/constants/contract-type';
import { UserSalaryEntity } from '../user-salary.entity';
import { UserDto } from './user.dto';

export class UserSalaryDto extends AbstractDto {
    @ApiModelProperty()
    salary: number;

    @ApiModelProperty({ enum: ContractType })
    contractType: ContractType;

    @ApiModelProperty({ type: UserDto })
    user: UserEntity;

    constructor(userSalary: UserSalaryEntity, user: UserEntity) {
        super(userSalary);
        this.salary = userSalary.salary;
        this.contractType = userSalary.contractType;
        this.user = user;
    }
}

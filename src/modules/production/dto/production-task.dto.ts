'use strict';

import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ProductionTaskEntity } from '../models/production-task.entity';
import { CustomerDto } from 'modules/customer/dto/customer.dto';
import { UserDto } from 'modules/user/dto/user.dto';
import { UserEntity } from 'modules/user/models/user.entity';
import { CustomerEntity } from 'modules/customer/models/customer.entity';

export class ProductionTaskDto extends AbstractDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty({ format: 'time' })
    duration: string;

    @ApiProperty()
    createdAt: string;

    @ApiProperty({ type: CustomerDto })
    customer: CustomerDto;

    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ type: UserDto })
    master: UserEntity;

    constructor(productionTask: ProductionTaskEntity) {
        super(productionTask);
        this.name = productionTask.name;
        this.quantity = productionTask.quantity;
        this.duration = productionTask.duration;
        this.createdAt = productionTask.createdAt;
        this.customer = productionTask.customer;
        this.user = productionTask.user;
        this.master = productionTask.master;
    }
}

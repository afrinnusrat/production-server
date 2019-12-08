'use strict';

import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ProductionMachineHistoryEntity } from '../models/production-machine-history.entity';
import { ProductionTaskDto } from './production-task.dto';
import { ProductionMachineDto } from './production-machine.dto';
import { UserDto } from 'modules/user/dto/user.dto';

export class ProductionMachineHistoryDto extends AbstractDto {
    @ApiProperty({ format: 'date-time' })
    usedAt: string;

    @ApiProperty({ type: ProductionTaskDto })
    productionTask: ProductionTaskDto;

    @ApiProperty({ type: ProductionMachineDto })
    productionMachine: ProductionMachineDto;

    @ApiProperty({ type: UserDto })
    user: UserDto;

    constructor(productionMachineHistory: ProductionMachineHistoryEntity) {
        super(productionMachineHistory);
        this.usedAt = productionMachineHistory.usedAt;
        this.productionTask = productionMachineHistory.productionTask;
        this.productionMachine = productionMachineHistory.productionMachine;
        this.user = productionMachineHistory.user;
    }
}

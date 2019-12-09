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

    @ApiProperty()
    productionTaskId: number;

    @ApiProperty()
    productionMachineId: number;

    @ApiProperty()
    userId: number;

    constructor(
        productionMachineHistory: ProductionMachineHistoryEntity,
        relations: {
            productionTask: ProductionTaskDto;
            productionMachine: ProductionMachineDto;
            user: UserDto;
        },
    ) {
        super(productionMachineHistory);
        this.usedAt = productionMachineHistory.usedAt;
        this.productionTaskId = relations.productionTask.id;
        this.productionMachineId = relations.productionMachine.id;
        this.userId = relations.user.id;
    }
}

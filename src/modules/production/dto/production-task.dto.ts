'use strict';

import { ApiModelProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ContractType } from '../../../common/constants/contract-type';
import { ProductionMachineEntity } from '../models/production-machine.entity';
import { ProductionTaskEntity } from '../models/production-task.entity';

export class ProductionTaskDto extends AbstractDto {
    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    quantity: number;

    @ApiModelProperty({ format: 'time' })
    duration: string;

    @ApiModelProperty()
    createdAt: string;

    constructor(productionTask: ProductionTaskEntity) {
        super(productionTask);
        this.name = productionTask.name;
        this.quantity = productionTask.quantity;
        this.duration = productionTask.duration;
        this.createdAt = productionTask.createdAt;
    }
}

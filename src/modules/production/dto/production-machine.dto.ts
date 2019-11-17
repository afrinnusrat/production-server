'use strict';

import { ApiModelProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ContractType } from '../../../common/constants/contract-type';
import { ProductionMachineEntity } from '../models/production-machine.entity';

export class ProductionMachineDto extends AbstractDto {
    @ApiModelProperty()
    name: string;

    constructor(productionMachine: ProductionMachineEntity) {
        super(productionMachine);
        this.name = productionMachine.name;
    }
}

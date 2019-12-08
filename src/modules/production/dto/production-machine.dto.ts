'use strict';

import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ProductionMachineEntity } from '../models/production-machine.entity';

export class ProductionMachineDto extends AbstractDto {
    @ApiProperty()
    name: string;

    constructor(productionMachine: ProductionMachineEntity) {
        super(productionMachine);
        this.name = productionMachine.name;
    }
}

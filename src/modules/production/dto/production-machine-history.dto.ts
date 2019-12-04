'use strict';

import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ProductionMachineHistoryEntity } from '../models/production-machine-history.entity';

export class ProductionMachineHistoryDto extends AbstractDto {
    @ApiProperty()
    usedAt: string;

    constructor(productionMachineHistory: ProductionMachineHistoryEntity) {
        super(productionMachineHistory);
        this.usedAt = productionMachineHistory.usedAt;
    }
}

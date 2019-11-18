'use strict';

import { ApiModelProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { ProductionMachineHistoryEntity } from '../models/production-machine-history.entity';

export class ProductionMachineHistoryDto extends AbstractDto {
    @ApiModelProperty()
    lastUsedAt: string;

    constructor(productionMachineHistory: ProductionMachineHistoryEntity) {
        super(productionMachineHistory);
        this.lastUsedAt = productionMachineHistory.lastUsedAt;
    }
}

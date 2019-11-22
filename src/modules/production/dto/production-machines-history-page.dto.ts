import { ApiModelProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { ProductionMachineHistoryDto } from './production-machine-history.dto';

export class ProductionMachinesHistoryPageDto {
    @ApiModelProperty({
        type: ProductionMachineHistoryDto,
        isArray: true,
    })
    readonly data: ProductionMachineHistoryDto[];

    @ApiModelProperty()
    readonly meta: PageMetaDto;

    constructor(data: ProductionMachineHistoryDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

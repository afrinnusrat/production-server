import { ApiModelProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { ProductionMachineDto } from './production-machine.dto';

export class ProductionMachinesPageDto {
    @ApiModelProperty({
        type: ProductionMachineDto,
        isArray: true,
    })
    readonly data: ProductionMachineDto[];

    @ApiModelProperty()
    readonly meta: PageMetaDto;

    constructor(data: ProductionMachineDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

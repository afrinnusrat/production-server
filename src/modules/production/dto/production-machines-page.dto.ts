import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { ProductionMachineDto } from './production-machine.dto';

export class ProductionMachinesPageDto {
    @ApiProperty({
        type: ProductionMachineDto,
        isArray: true,
    })
    readonly data: ProductionMachineDto[];

    @ApiProperty()
    readonly meta: PageMetaDto;

    constructor(data: ProductionMachineDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

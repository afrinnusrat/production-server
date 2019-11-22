import { ApiModelProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { ProductionTaskDto } from './production-task.dto';

export class ProductionTasksPageDto {
    @ApiModelProperty({
        type: ProductionTaskDto,
        isArray: true,
    })
    readonly data: ProductionTaskDto[];

    @ApiModelProperty()
    readonly meta: PageMetaDto;

    constructor(data: ProductionTaskDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

import { ApiModelProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { CustomerDto } from './customer.dto';

export class CustomersPageDto {
    @ApiModelProperty({
        type: CustomerDto,
        isArray: true,
    })
    readonly data: CustomerDto[];

    @ApiModelProperty()
    readonly meta: PageMetaDto;

    constructor(data: CustomerDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

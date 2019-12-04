import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/page-meta.dto';
import { CustomerDto } from './customer.dto';

export class CustomersPageDto {
    @ApiProperty({
        type: CustomerDto,
        isArray: true,
    })
    readonly data: CustomerDto[];

    @ApiProperty()
    readonly meta: PageMetaDto;

    constructor(data: CustomerDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}

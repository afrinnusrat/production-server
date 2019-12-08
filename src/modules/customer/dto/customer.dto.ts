'use strict';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { CustomerEntity } from '../models/customer.entity';

export class CustomerDto extends AbstractDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    zip: string;

    @ApiProperty()
    tax: string;

    @ApiProperty({ format: 'date' })
    createdAt: string;

    constructor(customer: CustomerEntity) {
        super(customer);
        this.name = customer.name;
        this.email = customer.email;
        this.phone = customer.phone;
        this.street = customer.street;
        this.city = customer.city;
        this.state = customer.state;
        this.zip = customer.zip;
        this.tax = customer.tax;
        this.createdAt = customer.createdAt;
    }
}

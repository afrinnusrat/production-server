'use strict';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { CustomerEntity } from '../models/customer.entity';

export class CustomerDto extends AbstractDto {
    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    phone: string;

    @ApiModelProperty()
    street: string;

    @ApiModelProperty()
    city: string;

    @ApiModelProperty()
    state: string;

    @ApiModelProperty()
    zip: string;

    @ApiModelProperty()
    tax: string;

    @ApiModelPropertyOptional({ type: 'date' })
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

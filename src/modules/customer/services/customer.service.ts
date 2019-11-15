import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customer.repository';
import { CustomerEntity } from '../models/customer.entity';
import { CustomerRegisterDto } from '../dto/customer-register.dto';
import { FindConditions } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(public readonly customerRepository: CustomerRepository) {}

    async createCustomer(
        customerRegisterDto: CustomerRegisterDto,
    ): Promise<CustomerEntity> {
        const user = this.customerRepository.create(customerRegisterDto);

        return this.customerRepository.save(user);
    }
}

import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customer.repository';
import { CustomerEntity } from '../models/customer.entity';
import { CustomerRegisterDto } from '../dto/customer-register.dto';
import { CustomersPageOptionsDto } from '../dto/customers-page-options.dto';
import { CustomersPageDto } from '../dto/customers-page.dto';
import { PageMetaDto } from 'common/dto/page-meta.dto';

@Injectable()
export class CustomerService {
    constructor(public readonly customerRepository: CustomerRepository) {}

    async createCustomer(
        customerRegisterDto: CustomerRegisterDto,
    ): Promise<CustomerEntity> {
        const user = this.customerRepository.create(customerRegisterDto);

        return this.customerRepository.save(user);
    }

    async getCustomers(
        pageOptionsDto: CustomersPageOptionsDto,
    ): Promise<CustomersPageDto> {
        const queryBuilder = this.customerRepository.createQueryBuilder(
            'customer',
        );
        const [customers, customersCount] = await queryBuilder
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)
            .getManyAndCount();

        const pageMetaDto = new PageMetaDto({
            pageOptionsDto,
            itemCount: customersCount,
        });
        return new CustomersPageDto(customers.toDtos(), pageMetaDto);
    }
}

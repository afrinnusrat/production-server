'use strict';

import {
    Controller,
    HttpCode,
    HttpStatus,
    UseGuards,
    UseInterceptors,
    Post,
    Body,
    Get,
    ValidationPipe,
    Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { RolesGuard } from '../../../guards/roles.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../dto/customer.dto';
import { CustomerRegisterDto } from '../dto/customer-register.dto';
import { CustomersPageDto } from '../dto/customers-page.dto';
import { CustomersPageOptionsDto } from '../dto/customers-page-options.dto';

@Controller('customers')
@ApiTags('Customers')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@Roles(RoleType.Admin)
@ApiBearerAuth()
export class CustomerController {
    constructor(private _customerService: CustomerService) {}

    @Post('/')
    @Roles(RoleType.Master, RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: CustomerDto,
        description: 'Successfully Registered',
    })
    async customerRegister(
        @Body() customerRegisterDto: CustomerRegisterDto,
    ): Promise<CustomerDto> {
        const createdCustomer = await this._customerService.createCustomer(
            customerRegisterDto,
        );

        return createdCustomer.toDto();
    }

    @Get('/')
    @Roles(RoleType.Master, RoleType.Admin)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Get customers list',
        type: CustomersPageDto,
    })
    getUsers(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: CustomersPageOptionsDto,
    ): Promise<CustomersPageDto> {
        return this._customerService.getCustomers(pageOptionsDto);
    }
}

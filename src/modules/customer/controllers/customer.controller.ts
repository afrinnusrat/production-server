'use strict';

import {
    Controller,
    HttpCode,
    HttpStatus,
    UseGuards,
    UseInterceptors,
    Post,
    Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOkResponse } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthGuard } from '../../../guards/auth.guard';
import { RolesGuard } from '../../../guards/roles.guard';
import { AuthUserInterceptor } from '../../../interceptors/auth-user-interceptor.service';
import { CustomerService } from '../services/customer.service';
import { CustomerDto } from '../dto/customer.dto';
import { CustomerRegisterDto } from '../dto/customer-register.dto';

@Controller('customers')
@ApiUseTags('customers')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@Roles(RoleType.Admin)
@ApiBearerAuth()
export class CustomerController {
    constructor(private _customerService: CustomerService) {}

    @Post('/')
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
}

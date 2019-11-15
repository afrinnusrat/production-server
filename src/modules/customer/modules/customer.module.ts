import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../auth/modules/auth.module';
import { CustomerRepository } from '../repositories/customer.repository';
import { CustomerService } from '../services/customer.service';
import { CustomerController } from '../controllers/customer.controller';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([CustomerRepository]),
    ],
    controllers: [CustomerController],
    exports: [CustomerService],
    providers: [CustomerService],
})
export class CustomerModule {}

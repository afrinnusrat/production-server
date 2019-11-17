import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/modules/auth.module';
import { ProductionMachineRepository } from '../repositories/production-machnine.repository';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([ProductionMachineRepository]),
    ],
    controllers: [],
    exports: [],
    providers: [],
})
export class ProductionModule {}

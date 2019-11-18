import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/modules/auth.module';
import { ProductionMachineRepository } from '../repositories/production-machine.repository';
import { ProductionTaskEntity } from '../models/production-task.entity';
import { ProductionTaskRepository } from '../repositories/production-task.repository';
import { ProductionMachineHistoryRepository } from '../repositories/production-machine-history.repository';
import { ProductionController } from '../controllers/production.controller';
import { ProductionService } from '../services/production.service';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([
            ProductionTaskRepository,
            ProductionMachineRepository,
            ProductionMachineHistoryRepository,
        ]),
    ],
    controllers: [ProductionController],
    exports: [ProductionService],
    providers: [ProductionService],
})
export class ProductionModule {}

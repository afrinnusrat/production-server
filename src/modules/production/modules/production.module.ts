import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/modules/auth.module';
import { ProductionMachineRepository } from '../repositories/production-machine.repository';
import { ProductionTaskRepository } from '../repositories/production-task.repository';
import { ProductionMachineHistoryRepository } from '../repositories/production-machine-history.repository';
import { ProductionMachineController } from '../controllers/production-machine.controller';
import { ProductionMachineService } from '../services/production-machine.service';
import { ProductionTaskService } from '../services/production-task.service';
import { ProductionTaskController } from '../controllers/production-task.controller';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([
            ProductionTaskRepository,
            ProductionMachineRepository,
            ProductionMachineHistoryRepository,
        ]),
    ],
    controllers: [ProductionMachineController, ProductionTaskController],
    exports: [ProductionMachineService, ProductionTaskService],
    providers: [ProductionMachineService, ProductionTaskService],
})
export class ProductionModule {}

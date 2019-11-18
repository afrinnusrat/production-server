import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
} from 'typeorm';
import { ContractType } from '../../../common/constants/contract-type';
import { AbstractEntity } from '../../../common/models/abstract.entity';
import { ProductionMachineHistoryDto } from '../dto/production-machine-history.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../../modules/user/models/user.entity';
import { ProductionMachineEntity } from './production-machine.entity';
import { ProductionTaskEntity } from './production-task.entity';

@Entity({ name: 'production_machines_history' })
export class ProductionMachineHistoryEntity extends AbstractEntity<
    ProductionMachineHistoryDto
> {
    @CreateDateColumn()
    usedAt: string;

    @ManyToOne(
        type => ProductionTaskEntity,
        productionTask => productionTask.productionMachineHistory,
        { nullable: false },
    )
    @JoinColumn({ name: 'task_id' })
    productionTask: ProductionTaskEntity;

    @ManyToOne(
        type => ProductionMachineEntity,
        productionMachine => productionMachine.productionMachineHistory,
        { nullable: false },
    )
    @JoinColumn({ name: 'machine_id' })
    productionMachine: ProductionMachineEntity;

    @ManyToOne(type => UserEntity, user => user.productionMachineHistory, {
        nullable: false,
    })
    @JoinColumn({ name: 'operator_id' })
    user: UserEntity;

    dtoClass = ProductionMachineHistoryDto;
}

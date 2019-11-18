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
import { AbstractEntity } from '../../../common/models/abstract.entity';
import { ProductionMachineHistoryEntity } from './production-machine-history.entity';
import { ProductionTaskDto } from '../dto/production-task.dto';
import { UserEntity } from '../../user/models/user.entity';
import { CustomerEntity } from '../../customer/models/customer.entity';

@Entity({ name: 'production_tasks' })
export class ProductionTaskEntity extends AbstractEntity<ProductionTaskDto> {
    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column({ type: 'time', nullable: false })
    duration: string;

    @CreateDateColumn()
    createdAt: string;

    @ManyToOne(type => CustomerEntity, customer => customer.productionTask)
    @JoinColumn({ name: 'customer_id' })
    customer: CustomerEntity;

    @ManyToOne(type => UserEntity, user => user.productionTask)
    @JoinColumn({ name: 'operator_id' })
    user: UserEntity;

    @ManyToOne(type => UserEntity, user => user.productionTask)
    @JoinColumn({ name: 'master_id' })
    master: UserEntity;

    @OneToMany(
        type => ProductionMachineHistoryEntity,
        productionMachineHistory => productionMachineHistory.productionTask,
    )
    productionMachineHistory: ProductionMachineHistoryEntity[];

    dtoClass = ProductionTaskDto;
}

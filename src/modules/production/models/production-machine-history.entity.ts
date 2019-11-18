import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { ContractType } from '../../../common/constants/contract-type';
import { AbstractEntity } from '../../../common/models/abstract.entity';
import { ProductionMachineHistoryDto } from '../dto/production-machine-history.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../../modules/user/models/user.entity';
import { ProductionMachineEntity } from './production-machine.entity';

@Entity({ name: 'production_machines_history' })
export class ProductionMachineHistoryEntity extends AbstractEntity<
    ProductionMachineHistoryDto
> {
    @UpdateDateColumn()
    lastUsedAt: string;

    @ManyToOne(
        type => ProductionMachineEntity,
        productionMachine => productionMachine.productionMachineHistory,
    )
    @JoinColumn({ name: 'machine_id' })
    productionMachine: ProductionMachineEntity;

    @ManyToOne(type => UserEntity, user => user.productionMachineHistory)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    dtoClass = ProductionMachineHistoryDto;
}

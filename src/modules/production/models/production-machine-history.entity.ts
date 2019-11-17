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
import { ProductionMachineDto } from '../dto/production-machine.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../../modules/user/models/user.entity';

@Entity({ name: 'production_machines_history' })
export class ProductionMachineHistoryEntity extends AbstractEntity<
    ProductionMachineHistoryDto
> {
    @ManyToOne(type => UserEntity, user => user.productionMachineHistory)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    dtoClass = ProductionMachineHistoryDto;
}

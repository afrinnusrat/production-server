import { Entity, Column, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/models/abstract.entity';
import { ProductionMachineDto } from '../dto/production-machine.dto';
import { ProductionMachineHistoryEntity } from './production-machine-history.entity';

@Entity({ name: 'production_machines' })
export class ProductionMachineEntity extends AbstractEntity<
    ProductionMachineDto
> {
    @Column()
    name: string;

    @OneToMany(
        type => ProductionMachineHistoryEntity,
        productionMachineHistory => productionMachineHistory.productionMachine,
    )
    productionMachineHistory: ProductionMachineHistoryEntity[];

    dtoClass = ProductionMachineDto;
}

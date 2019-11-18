import { Entity, Column, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/models/abstract.entity';
import { CustomerDto } from '../dto/customer.dto';
import { ProductionTaskEntity } from '../../production/models/production-task.entity';

@Entity({ name: 'customers' })
export class CustomerEntity extends AbstractEntity<CustomerDto> {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column()
    tax: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @OneToMany(
        type => ProductionTaskEntity,
        productionTask => productionTask.customer,
    )
    productionTask: ProductionTaskEntity[];

    dtoClass = CustomerDto;
}

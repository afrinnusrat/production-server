import { Entity, Column, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/models/abstract.entity';
import { UserDto } from '../dto/user.dto';
import { UserAuthEntity } from './user-auth.entity';
import { UserSalaryEntity } from './user-salary.entity';
import { ProductionMachineHistoryEntity } from '../../production/models/production-machine-history.entity';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

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

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @Column('timestamp with time zone', { nullable: true })
    lastLogin: string;

    @Column('timestamp with time zone', { nullable: true })
    lastLogout: string;

    @OneToOne(type => UserAuthEntity, userAuth => userAuth.user, {
        nullable: false,
    })
    userAuth: UserAuthEntity;

    @OneToOne(type => UserSalaryEntity, userSalary => userSalary.user, {
        nullable: false,
    })
    userSalary: UserSalaryEntity;

    @OneToMany(
        type => ProductionMachineHistoryEntity,
        productionMachineHistory => productionMachineHistory.user,
    )
    productionMachineHistory: ProductionMachineHistoryEntity[];

    dtoClass = UserDto;
}

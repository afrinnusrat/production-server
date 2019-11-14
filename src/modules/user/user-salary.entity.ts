import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserSalaryDto } from './dto/user-salary.dto';
import { ContractType } from '../../common/constants/contract-type';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'users_salary' })
export class UserSalaryEntity extends AbstractEntity<UserSalaryDto> {
    @Column('decimal', { precision: 13, scale: 2, default: 0 })
    salary: number;

    @Column({
        type: 'enum',
        enum: ContractType,
        default: ContractType.FullTime,
    })
    contractType: ContractType;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToOne(type => UserEntity, user => user.userSalary, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    dtoClass = UserSalaryDto;
}

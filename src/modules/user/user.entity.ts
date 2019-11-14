import { Entity, Column, CreateDateColumn, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { UserDto } from './dto/user.dto';
import { PasswordTransformer } from './password.transformer';
import { UserAuthEntity } from './user-auth.entity';
import { UserSalaryEntity } from './user-salary.entity';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
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

    dtoClass = UserDto;
}

'use strict';

import { IAbstract } from 'common/interfaces/abstract.interface';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserSalaryEntity } from '../models/user-salary.entity';

export interface IUser extends IAbstract {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly createdAt: string;
    readonly lastLogin: string;
    readonly lastLogout: string;
    readonly userAuth: UserAuthEntity;
    readonly userSalary: UserSalaryEntity;
}

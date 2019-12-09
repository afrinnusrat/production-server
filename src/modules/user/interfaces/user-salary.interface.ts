import { IAbstract } from 'common/interfaces/abstract.interface';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserSalaryEntity } from '../models/user-salary.entity';
import { ProductionMachineHistoryEntity } from 'modules/production/models/production-machine-history.entity';
import { ProductionTaskEntity } from 'modules/production/models/production-task.entity';
import { ContractType } from '../../../common/constants/contract-type';
import { UserEntity } from '../models/user.entity';

export interface IUserSalary extends IAbstract {
    readonly salary: number;
    readonly contractType: ContractType;
    readonly updatedAt: string;
    readonly user: UserEntity;
}

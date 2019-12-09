import { IAbstract } from 'common/interfaces/abstract.interface';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserSalaryEntity } from '../models/user-salary.entity';
import { ProductionMachineHistoryEntity } from 'modules/production/models/production-machine-history.entity';
import { ProductionTaskEntity } from 'modules/production/models/production-task.entity';
import { ContractType } from '../../../common/constants/contract-type';
import { UserEntity } from '../models/user.entity';
import { RoleType } from '../../../common/constants/role-type';
import { UserDto } from '../dto/user.dto';

export interface IUserAuth extends IAbstract {
    readonly role: RoleType;
    readonly login: number;
    readonly password: string;
    readonly user: UserDto;
}

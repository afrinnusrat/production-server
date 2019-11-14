import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { UserSalaryEntity } from './user-salary.entity';

@EntityRepository(UserSalaryEntity)
export class UserSalaryRepository extends Repository<UserSalaryEntity> {}

import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { UserAuthEntity } from '../models/user-auth.entity';

@EntityRepository(UserAuthEntity)
export class UserAuthRepository extends Repository<UserAuthEntity> {}

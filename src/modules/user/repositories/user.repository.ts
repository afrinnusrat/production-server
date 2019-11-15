import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { UserEntity } from '../models/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}

import { Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';
import { UserAuthEntity } from './user-auth.entity';
import { UserAuthRepository } from './user-auth.repository';

@Injectable()
export class UserAuthService {
    constructor(public readonly userAuthRepository: UserAuthRepository) {}

    /**
     * Find single userAuth
     */
    findUser(
        findData: FindConditions<UserAuthEntity>,
    ): Promise<UserAuthEntity> {
        return this.userAuthRepository.findOne(findData, {
            relations: ['user'],
        });
    }
}

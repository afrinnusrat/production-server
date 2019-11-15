import { Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';
import { UserAuthEntity } from '../models/user-auth.entity';
import { UserAuthRepository } from '../repositories/user-auth.repository';

@Injectable()
export class UserAuthService {
    constructor(public readonly userAuthRepository: UserAuthRepository) {}

    findUser(
        findData: FindConditions<UserAuthEntity>,
    ): Promise<UserAuthEntity> {
        return this.userAuthRepository.findOne(findData, {
            relations: ['user'],
        });
    }
}

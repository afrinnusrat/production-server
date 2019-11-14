import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from './user.repository';
import { UserAuthRepository } from './user-auth.repository';
import { UserAuthService } from './user-auth.service';
import { UserSalaryRepository } from './user-salary.repository';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([
            UserRepository,
            UserAuthRepository,
            UserSalaryRepository,
        ]),
    ],
    controllers: [UserController],
    exports: [UserService, UserAuthService],
    providers: [UserService, UserAuthService],
})
export class UserModule {}

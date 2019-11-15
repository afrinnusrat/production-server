import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { AuthModule } from '../../auth/modules/auth.module';
import { UserRepository } from '../repositories/user.repository';
import { UserAuthRepository } from '../repositories/user-auth.repository';
import { UserAuthService } from '../services/user-auth.service';
import { UserSalaryRepository } from '../repositories/user-salary.repository';

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

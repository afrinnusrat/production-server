import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '../../../shared/services/config.service';
import { UserLoginDto } from '../dto/user-login.dto';
import { UserNotFoundException } from '../../../exceptions/user-not-found.exception';
import { UtilsService } from '../../../providers/services/utils.service';
import { UserService } from '../../user/services/user.service';
import { ContextService } from '../../../providers/services/context.service';
import { TokenPayloadDto } from '../dto/token-payload.dto';
import { UserAuthService } from 'modules/user/services/user-auth.service';
import { UserAuthEntity } from 'modules/user/models/user-auth.entity';
import { UserPasswordNotValidException } from 'exceptions/user-password-not-valid.exception';
import { UserEntity } from 'modules/user/models/user.entity';

@Injectable()
export class AuthService {
    private static _authUserKey = 'user_key';

    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly userService: UserService,
        public readonly userAuthService: UserAuthService,
    ) {}

    async createToken(user: UserEntity): Promise<TokenPayloadDto> {
        const { uuid } = user;

        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({ uuid }),
        });
    }

    async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
        const { login, password } = userLoginDto;
        const userAuth = await this.userAuthService.findUser({ login });

        const isPasswordValid = await UtilsService.validateHash(
            userAuth && userAuth.password,
            password,
        );

        if (!userAuth) {
            throw new UserNotFoundException();
        }

        if (userAuth.password && !isPasswordValid) {
            throw new UserPasswordNotValidException();
        }

        return userAuth.user;
    }

    static setAuthUser(userAuth: UserAuthEntity) {
        ContextService.set(AuthService._authUserKey, userAuth);
    }

    static getAuthUser(): UserAuthEntity {
        return ContextService.get(AuthService._authUserKey);
    }
}

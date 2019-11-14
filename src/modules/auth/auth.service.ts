import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '../../shared/services/config.service';
import { UserEntity } from '../user/user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';
import { UtilsService } from '../../providers/utils.service';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dto/user.dto';
import { ContextService } from '../../providers/context.service';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { UserAuthService } from 'modules/user/user-auth.service';
import { UserAuthEntity } from 'modules/user/user-auth.entity';
import { UserAuthDto } from 'modules/user/dto/user-auth.dto';
import { UserPasswordNotValidException } from 'exceptions/user-password-not-valid.exception';

@Injectable()
export class AuthService {
    private static _authUserKey = 'user_key';

    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly userService: UserService,
        public readonly userAuthService: UserAuthService,
    ) {}

    async createToken(userAuth: UserAuthEntity): Promise<TokenPayloadDto> {
        return new TokenPayloadDto({
            expiresIn: this.configService.getNumber('JWT_EXPIRATION_TIME'),
            accessToken: await this.jwtService.signAsync({
                uuid: userAuth.user.uuid,
                role: userAuth.role,
            }),
        });
    }

    async validateUser(userLoginDto: UserLoginDto): Promise<UserAuthEntity> {
        const userAuth = await this.userAuthService.findUser({
            login: userLoginDto.login,
        });

        const isPasswordValid = await UtilsService.validateHash(
            userAuth && userAuth.password,
            userLoginDto.password,
        );

        if (!userAuth) {
            throw new UserNotFoundException();
        }

        if (userAuth.password && !isPasswordValid) {
            throw new UserPasswordNotValidException();
        }

        return userAuth;
    }

    static setAuthUser(userAuth: UserAuthEntity) {
        ContextService.set(AuthService._authUserKey, userAuth);
    }

    static getAuthUser(): UserAuthEntity {
        return ContextService.get(AuthService._authUserKey);
    }
}

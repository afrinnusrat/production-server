import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '../../shared/services/config.service';
import { UserService } from '../user/services/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        public readonly configService: ConfigService,
        public readonly userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
    }

    async validate({ iat, exp, uuid }) {
        const timeDiff = exp - iat;

        if (timeDiff <= 0) {
            throw new UnauthorizedException();
        }

        const user = await this.userService.findOne({ uuid });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}

import { Observable } from 'rxjs';
import {
    ExecutionContext,
    Injectable,
    NestInterceptor,
    CallHandler,
} from '@nestjs/common';

import { UserAuthEntity } from '../modules/user/user-auth.entity';
import { AuthService } from '../modules/auth/auth.service';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        const userAuth = <UserAuthEntity>request.userAuth;
        AuthService.setAuthUser(userAuth);

        return next.handle();
    }
}

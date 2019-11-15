import { Observable } from 'rxjs';
import {
    ExecutionContext,
    Injectable,
    NestInterceptor,
    CallHandler,
} from '@nestjs/common';

import { UserAuthEntity } from '../modules/user/models/user-auth.entity';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();

        const user = <UserAuthEntity>request.user;
        AuthService.setAuthUser(user);

        return next.handle();
    }
}

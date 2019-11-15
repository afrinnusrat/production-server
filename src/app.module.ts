import './boilerplate.polyfill';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/modules/auth.module';
import { MathModule } from './modules/math/math.module';
import { UserModule } from './modules/user/modules/user.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/modules/shared.module';
import { UserAuthService } from 'modules/user/services/user-auth.service';

@Module({
    imports: [
        AuthModule,
        UserModule,
        MathModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}

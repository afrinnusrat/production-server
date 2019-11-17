import './boilerplate.polyfill';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/modules/auth.module';
import { UserModule } from './modules/user/modules/user.module';
import { CustomerModule } from './modules/customer/modules/customer.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/modules/shared.module';
import { ProductionModule } from 'modules/production/modules/production.module';

@Module({
    imports: [
        AuthModule,
        UserModule,
        CustomerModule,
        ProductionModule,
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

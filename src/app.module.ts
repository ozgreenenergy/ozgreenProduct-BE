import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customers.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { MenuModule } from './menu/menus.module';
import { ResponseInterceptor } from './auth/strategies/response';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DeviceModule } from './device/device.module';
import { RolesModule } from './roles/roles.module';
import { RoleUserModule } from './roles/role-users/role-user.module';
import { SensorModule } from './sensor/sensor.module';
import { UnitModule } from './unit/unit.module';
//import { ListenerScriptModule } from './listener-script/listener-script.module';
import { RawDataModule } from './raw-data/raw-data.module';
import  config  from './config/configuration';
import { PortalModule } from './portal/portal.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CustomerModule,
    MenuModule,
    MongooseModule.forRoot(
      'mongodb://54.253.133.85/tracNetJWT',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    ProductCategoryModule,
    DeviceModule,
    RolesModule,
    RoleUserModule,
    //ListenerScriptModule,
    SensorModule,
    UnitModule,
    RawDataModule,
    PortalModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useFactory: () =>
        new ResponseInterceptor('Success', 'Something went wrong'),
    },
  ],
})
export class AppModule {}

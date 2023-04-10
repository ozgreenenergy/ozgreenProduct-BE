import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/products.module';
import { CustomerModule } from './customer/customers.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { MenuModule } from './menu/menus.module';
import { ResponseInterceptor } from './auth/strategies/response';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DeviceModule } from './device/device.module';
import { RolesModule } from './roles/roles.module';
import { RoleUserModule } from './roles/role-users/role-user.module';



@Module({
  imports: [
    UsersModule,
    ProductModule,
    AuthModule,
    CustomerModule,
    MenuModule,
    MongooseModule.forRoot(
      'mongodb://localhost/tracNetJWT',
    ),
    ConfigModule.forRoot(),
    ProductCategoryModule,
    DeviceModule,
    RolesModule,
    RoleUserModule,
    
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

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

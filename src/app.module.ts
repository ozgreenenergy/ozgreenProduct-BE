import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/products.module';
import { CustomerModule } from './customer/customers.module';

@Module({
  imports: [
    UsersModule,
    ProductModule,
    AuthModule,
    CustomerModule,
    MongooseModule.forRoot(
      'mongodb://localhost/tracNetJWT',
    ),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { CustomersController } from './customers.controller';
import { CustomerSchema } from './customers.model';
import { CustomersService } from './customers.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: "customer", schema: CustomerSchema }])],
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomerModule {}
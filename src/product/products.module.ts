import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { ProductSchema } from "./products.model"
import { ProductsService } from './products.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductModule {}
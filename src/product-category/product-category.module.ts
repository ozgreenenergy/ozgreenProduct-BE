import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategorySchema } from "./product-category.model"

@Module({
  imports: [MongooseModule.forFeature([{ name: "productCategory", schema: ProductCategorySchema }])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController]
})
export class ProductCategoryModule {}

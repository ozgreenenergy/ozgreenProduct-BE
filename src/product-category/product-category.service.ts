import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCategory, ProductCategoryDocument } from './product-category.model';

@Injectable()
export class ProductCategoryService {
    constructor(@InjectModel('productCategory') private readonly productCategory: Model<ProductCategoryDocument>) { }
    async createProductCategory(name: string, modelId: string, description: string,created_at: Date): Promise<ProductCategory> {
        return this.productCategory.create({
            name,
            modelId,
            description,
            created_at : new Date(),
        });
    }
}

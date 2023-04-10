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

    async findOne(id: number) {
        return await this.productCategory.findById(id);
    }

    async findAll(): Promise<ProductCategory[]> {
        return this.productCategory.find().exec();
    }

    async update(id: string, menu: ProductCategory): Promise<ProductCategory> {
        return this.productCategory.findByIdAndUpdate(id, menu, { new: true }).exec();
    }
    
    async delete(id: string): Promise<ProductCategory> {
       return this.productCategory.findByIdAndRemove(id).exec();
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './products.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('product') private readonly productModel: Model<ProductDocument>) { }
    async createProduct(productModelRef: string, product: string, aCustomerRef: string,_created_at: Date): Promise<Product> {
        return this.productModel.create({
            productModelRef,
            product,
            aCustomerRef,
            created_at : new Date(),
        });
    }
    async getProduct(query: object ): Promise<Product> {
        return this.productModel.findOne(query);
    }
}
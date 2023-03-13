import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './customers.model';

@Injectable()
export class CustomersService {
    constructor(@InjectModel('customer') private readonly customerModel: Model<CustomerDocument>) { }
    async createCustomer(name: string,_created_at: Date): Promise<Customer> {
        return this.customerModel.create({
            name,
            created_at : new Date(),
        });
    }
    async getCustomer(query: object ): Promise<Customer> {
        return this.customerModel.findOne(query);
    }
}
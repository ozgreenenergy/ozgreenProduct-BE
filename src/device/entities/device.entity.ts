import { Column ,  PrimaryGeneratedColumn , OneToOne ,  JoinColumn } from 'typeorm';
import { ProductCategory } from 'src/product-category/product-category.model'
import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imei_no: string;

    @Column()
    productModelId: string;
   
    @Column()
    createdAt: Date;
}


import { Column ,  PrimaryGeneratedColumn , OneToOne ,  JoinColumn } from 'typeorm';
import {  } from 'typeorm';
import { ProductCategory } from 'src/product-category/product-category.model'

export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imei_no: string;

    @Column()
    createdAt: Date;


    @OneToOne(type => ProductCategory, productCategory => productCategory.modelId)
    productModelId: ProductCategory;
}


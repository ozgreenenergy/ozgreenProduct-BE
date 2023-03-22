import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OneToMany } from 'typeorm';
import { Device } from 'src/device/entities/device.entity'

export type ProductCategoryDocument = ProductCategory & Document;

@Schema()
export class ProductCategory {
  @Prop()
  name: string;

  //@Prop()
  //modelId: string;

  @Prop()
  description: string;

  
  @Prop({ type: Date})
  created_at: Date;

  @OneToMany(type => Device, device => device.productModelId)
    modelId: Device;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);
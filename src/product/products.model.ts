import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productModelRef: string;

  @Prop()
  product: string;

  @Prop()
  aCustomerRef: string;

  
  @Prop({ type: Date})
  created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
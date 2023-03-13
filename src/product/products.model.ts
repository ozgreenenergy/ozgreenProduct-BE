import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes , Types , Mongoose } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productModelRef: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'ProductCategory', required: true })
  productModelId!: Types.ObjectId;

  @Prop()
  product: string;

  @Prop()
  aCustomerRef: string;

  
  @Prop({ type: Date})
  created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
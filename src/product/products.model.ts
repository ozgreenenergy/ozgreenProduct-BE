import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes , Types , Mongoose } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  imei: string;

  @Prop()
  description: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Customer', required: true })
  aCustomerRef!: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'ProductCategory', required: true })
  productModelRef!: Types.ObjectId;
  
  @Prop({ type: Date})
  created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
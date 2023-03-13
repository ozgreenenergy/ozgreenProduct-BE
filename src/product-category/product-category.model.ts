import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductCategoryDocument = ProductCategory & Document;

@Schema()
export class ProductCategory {
  @Prop()
  name: string;

  @Prop()
  modelId: string;

  @Prop()
  description: string;

  
  @Prop({ type: Date})
  created_at: Date;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  name: string;
  
  @Prop({ type: Date})
  created_at: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
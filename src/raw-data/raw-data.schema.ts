import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RawData extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const RawDataSchema = SchemaFactory.createForClass(RawData);

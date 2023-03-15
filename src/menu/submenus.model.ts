import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submenu {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  path: string;
}

export const SubmenuSchema = SchemaFactory.createForClass(Submenu);
export type SubmenuDocument = Submenu & Document;

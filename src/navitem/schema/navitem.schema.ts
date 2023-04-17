import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes,  Types, Schema as MongooseSchema } from 'mongoose';
  
export type NavitemDocument = Navitem & Document;
  
  @Schema()
  export class Navitem {
    @Prop()
    name: string;
  
    @Prop({ type: SchemaTypes.ObjectId, ref: 'Navitem' })
    parentMenuId: Navitem;

    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const NavitemSchema = SchemaFactory.createForClass(Navitem);
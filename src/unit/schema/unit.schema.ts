import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes,  Types, Schema as MongooseSchema } from 'mongoose';
  
export type UnitDocument = Unit & Document;
  
  @Schema()
  export class Unit {
    
    @Prop()
    name: string;

    @Prop()
    unit_symbol: string;
  
    @Prop()
    description: string;
    
    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const UnitSchema = SchemaFactory.createForClass(Unit);
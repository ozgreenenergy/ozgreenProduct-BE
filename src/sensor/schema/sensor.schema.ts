import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes,  Types, Schema as MongooseSchema } from 'mongoose';
import { Unit } from '../../unit/schema/unit.schema'
  
export type SensorDocument = Sensor & Document;
  
  @Schema()
  export class Sensor {
    @Prop()
    name: string;
  
    @Prop()
    kind: string;
    
    @Prop({ type: SchemaTypes.ObjectId, ref: 'Unit' })
    unitId: Unit;

    @Prop()
    decimalPlaces: number;

    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const SensorSchema = SchemaFactory.createForClass(Sensor);
import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document , SchemaTypes , Types } from 'mongoose';
  
export type DeviceDocument = Device & Document;
  
  @Schema()
  export class Device {
    @Prop()
    name: string;
  
    @Prop()
    imei_no: string;
  
    @Prop({ type: SchemaTypes.ObjectId, ref: 'ProductCategory', required: true })
    productModelId!: Types.ObjectId;


  }
  
  export const DeviceSchema = SchemaFactory.createForClass(Device);
import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes,  Types, Schema as MongooseSchema } from 'mongoose';
import { ProductCategory } from 'src/product-category/product-category.model'
  
export type DeviceDocument = Device & Document;
  
  @Schema()
  export class Device {
    @Prop()
    name: string;
  
    @Prop()
    imei_no: string;
    
    @Prop({ type: SchemaTypes.ObjectId, ref: 'ProductCategory' })
    productModelId: ProductCategory;

    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const DeviceSchema = SchemaFactory.createForClass(Device);
import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes,  Types, Schema as MongooseSchema } from 'mongoose';
  
export type PortalDocument = Portal & Document;
  
  @Schema()
  export class Portal {
    
    @Prop()
    portal_name: string;

    @Prop()
    logo: string;

    @Prop({ type: Date , default: Date.now })
    timezone: Date  
    
    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const PortalSchema = SchemaFactory.createForClass(Portal);
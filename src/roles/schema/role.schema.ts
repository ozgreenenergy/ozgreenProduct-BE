import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Entity, BaseEntity, OneToMany } from 'typeorm';
import { RoleUser , RoleUserDocument } from '../schema/role-user.schema';
  
export type RoleDocument = Role & Document;
  
  @Schema()
  export class Role extends BaseEntity {
    @Prop()
    name: string;  

    @Prop()
    lable: string;

    @Prop({ type: Date , default: Date.now })
    createdAt: Date

    @OneToMany( type => RoleUser , roleUser => roleUser.roleId)
    roleUser: RoleUser[];

  }
  
  export const RoleSchema = SchemaFactory.createForClass(Role);
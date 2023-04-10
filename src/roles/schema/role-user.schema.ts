import { Prop , Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document,  SchemaTypes , Types, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/user.model';
import { Role } from 'src/roles/schema/role.schema';
//import { Entity, BaseEntity } from 'typeorm';
  
export type RoleUserDocument = RoleUser & Document;
  
  //@Entity()
  @Schema()
  export class RoleUser  {
    
    @Prop([{ type: SchemaTypes.ObjectId, ref: 'User' , required: true}])
    userId: User;

    @Prop([{ type: SchemaTypes.ObjectId, ref: 'Role' , required: true}])
    roleId: Role;

    @Prop({ type: Date , default: Date.now })
    createdAt: Date

  }
  
  export const RoleUserSchema = SchemaFactory.createForClass(RoleUser);
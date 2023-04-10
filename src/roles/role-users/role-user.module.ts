import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleUserService } from './role-user.service';
import { RoleUserController } from './role-user.controller';
import { RoleUser, RoleUserSchema } from '../schema/role-user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RoleUser.name, schema: RoleUserSchema }])],
  controllers: [RoleUserController],
  providers: [RoleUserService]
})
export class RoleUserModule {}

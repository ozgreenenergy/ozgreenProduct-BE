import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role , RoleDocument } from './schema/role.schema';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private readonly roleModel: Model < RoleDocument > ) {}
  
  create(createRoleDto: CreateRoleDto) {
    const createdRole = new this.roleModel(createRoleDto);
    return createdRole.save();
  }

  findAll() {
    return this.roleModel.find().exec();
  }

  async findOne(id) {
    return await this.roleModel.findById(id);

  }

  update(id: number, updateRoleDto: UpdateRoleDto): Promise< RoleDocument > {
    return this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true }).exec();
  }

  remove(id: number): Promise<RoleDocument> {
    return this.roleModel.findByIdAndRemove(id).exec();
  }
}

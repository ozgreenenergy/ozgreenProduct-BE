import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleUser, RoleUserDocument } from '../schema/role-user.schema';


@Injectable()
export class RoleUserService {
    constructor(@InjectModel(RoleUser.name) private readonly roleUserModel: Model < RoleUserDocument > ) {}

    
    async create(roleUser: RoleUser): Promise<RoleUserDocument> {
        const createdMenu = new this.roleUserModel(roleUser);
        return createdMenu.save();
      }

    async getUsers(): Promise<RoleUserDocument[]> {
        return this.roleUserModel.find({relations: {RoleUser: true}}).exec();
      }
}

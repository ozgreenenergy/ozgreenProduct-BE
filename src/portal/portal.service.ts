import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePortalDto } from './dto/create-portal.dto';
import { Portal , PortalDocument } from './schema/portal.schema';
import { Model } from 'mongoose';


@Injectable()
export class PortalService {
  constructor( @InjectModel(Portal.name) private readonly portalModel: Model < PortalDocument > ) {}

  async create(createPortalDto: CreatePortalDto) {
    let name = CreatePortalDto['portal_name'];
    let check = this.checkRecordExists(name);
    
    if((await check).length === 0) {
      const data = new this.portalModel(createPortalDto);
      return data.save();
    } else {
      return "Duplicate Portal Entry!";
    } 
  }

  async checkRecordExists(portalName) {
    return this.portalModel.find({ name: portalName }).exec();
  }

  async findAll() {
    return await this.portalModel.find();
  }
}

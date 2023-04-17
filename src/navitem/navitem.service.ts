import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNavitemDto } from './dto/create-navitem.dto';
import { UpdateNavitemDto } from './dto/update-navitem.dto';
import { Navitem, NavitemDocument } from './schema/navitem.schema';
import { Model } from 'mongoose';

@Injectable()
export class NavitemService {

  constructor(@InjectModel (Navitem.name) private readonly navItem: Model <NavitemDocument>){}

  async create(createNavitemDto: CreateNavitemDto) {
    let name = CreateNavitemDto['name'];
    let check = this.checkRecordExists(name);
    if((await check).length === 0) {
      const data = new this.navItem(createNavitemDto);
      return data.save();
    } else {
       return "Duplicate Module Entry!";
    } 
  }

  async checkRecordExists(menuName: string) {
    return this.navItem.find({ name: menuName }).exec();
  }

  async findAll() {
    return await this.navItem.find().populate("parentMenuId", "name");
  }

  async findOne(id: number) {
    return await this.navItem.findById(id).populate("parentMenuId", "name");
  }

  async update(id: number, updateNavitemDto: UpdateNavitemDto) {
    return this.navItem.findByIdAndUpdate(id, updateNavitemDto, { new: true }).exec();
  }

  async remove(id: number) {
    return this.navItem.findByIdAndRemove(id).exec();
  }
}

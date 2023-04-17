import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit , UnitDocument } from './schema/unit.schema';
import { Model } from 'mongoose';


@Injectable()
export class UnitService {
  constructor( @InjectModel(Unit.name) private readonly unitModel: Model < UnitDocument > ) {}

  async create(createUnitDto: CreateUnitDto) {
    let name = CreateUnitDto['name'];
    let check = this.checkRecordExists(name);
    if((await check).length === 0) {
      const data = new this.unitModel(createUnitDto);
      return data.save();
    } else {
      return "Duplicate Unit Entry!";
    } 
  }

  async checkRecordExists(unitName) {
    return this.unitModel.find({ name: unitName }).exec();
  }

  async findAll(page: number = 1, limit: number = 10) {
    // Validate page and limit parameters
    page = Number.isInteger(Number(page)) ? Math.max(1, Number(page)) : 1;
    limit = Number.isInteger(Number(limit)) ? Math.max(1, Number(limit)) : 10;

    const skip = (page - 1) * limit;
    const total = await this.unitModel.countDocuments();

    // Retrieve data from the database
    const units = await this.unitModel.find().skip(skip).limit(limit).exec();

    // Return paginated results
    return {
      total,
      page,
      limit,
      data: units,
    };

    // return await this.unitModel.find();
  }

  async findOne(id: number) {
    return await this.unitModel.findById(id);
  }

  async update(id: number, updateUnitDto: UpdateUnitDto) {
    return this.unitModel.findByIdAndUpdate(id, updateUnitDto, { new: true }).exec();
  }

  async remove(id: number) {
    return this.unitModel.findByIdAndRemove(id).exec();
  }
}

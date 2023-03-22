import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device , DeviceDocument } from './schema/device.schema';
import { Model } from 'mongoose';
import { Equal , DataSource } from 'typeorm';


@Injectable()
export class DeviceService {

  constructor(@InjectModel(Device.name) private readonly deviceModel: Model < DeviceDocument > ) {}

  async create(createDeviceDto: CreateDeviceDto) {
    let imeiNo = createDeviceDto['imei_no'];
    let check = this.checkRecordExists(imeiNo);
    if((await check).length === 0) {
      const data = new this.deviceModel(createDeviceDto);
      return data.save();
    } else {
      return "Device already exist";
    } 
  }

  async checkRecordExists(id) {
    return this.deviceModel.find({ imei_no: id }).exec();
  }

  async findAll() {
    return await this.deviceModel.find({relations: ['productModelId', 'productModelId.name']});
  }

  async findOne(id: number) {
    return await this.deviceModel.find( { id: id } , {relations: ['productModelId']});
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto): Promise< DeviceDocument > {
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto, { new: true }).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}

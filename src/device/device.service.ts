import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device , DeviceDocument } from './schema/device.schema';
import { Model } from 'mongoose';
import { Equal } from 'typeorm';

@Injectable()
export class DeviceService {

  constructor(@InjectModel(Device.name) private readonly deviceModel: Model < DeviceDocument > ) {}

  async create(createDeviceDto: CreateDeviceDto)  {
    let imeiNo = createDeviceDto['imei_no'];
    let check = this.checkRecordExists(imeiNo);
    if((await check).length === 0) {
      const data = new this.deviceModel(createDeviceDto);
      return data.save();
    } else {
      return "IMEI already exist";
    } 
  }

  async checkRecordExists(id) {
    return this.deviceModel.find({ imei_no: id }).exec();
  }

  findAll() {
    return `This action returns all device`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto): Promise< DeviceDocument > {
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto, { new: true }).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}

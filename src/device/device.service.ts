import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device , DeviceDocument } from './schema/device.schema';
import { Model } from 'mongoose';

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
    //return await this.deviceModel.find({ relations: ['productModelId', 'productModelId.modelId']});
    return await this.deviceModel.find().populate("productModelId", "modelId  name");;
  }

  async findOne(id: number) {
    return await this.deviceModel.findById(id);
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto): Promise< DeviceDocument > {
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto, { new: true }).exec();
  }

  async remove(id: string): Promise< DeviceDocument > {
    return this.deviceModel.findByIdAndRemove(id).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { Sensor , SensorDocument } from './schema/sensor.schema';
import { Model } from 'mongoose';

@Injectable()
export class SensorService {
  
  constructor(@InjectModel(Sensor.name)  private readonly sensorDocument: Model < SensorDocument > ){}
  
  async create(createSensorDto: CreateSensorDto) {
    return new this.sensorDocument(createSensorDto).save();
  }

  async findAll() {
    return await this.sensorDocument.find().populate("unitId", "name  unit_symbol");
  }

  async findOne(id: number) {
    return await this.sensorDocument.findById(id);
  }

  async update(id: number, updateSensorDto: UpdateSensorDto) {
    return this.sensorDocument.findByIdAndUpdate(id, updateSensorDto, { new: true }).exec();
  }

  async remove(id: number) {
    return this.sensorDocument.findByIdAndRemove(id).exec();
  }
}

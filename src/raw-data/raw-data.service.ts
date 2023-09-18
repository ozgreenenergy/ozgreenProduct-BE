import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RawData } from './raw-data.schema';

@Injectable()
export class RawDataService {
  constructor(
    @InjectModel(RawData.name) private readonly rawDataModel: Model<RawData>,
  ) {}

  async findAll(): Promise<RawData[]> {
    return this.rawDataModel.find().sort({date: 'desc'}).exec();
  }
}

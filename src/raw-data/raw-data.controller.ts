// raw-data.controller.ts
import { Controller, Get } from '@nestjs/common';
import { RawData } from './raw-data.schema';
import { RawDataService } from './raw-data.service';

@Controller('raw-data')
export class RawDataController {
  constructor(private readonly rawDataService: RawDataService) {}

  @Get()
  async findAll(): Promise<RawData[]> {
    return this.rawDataService.findAll();
  }
}

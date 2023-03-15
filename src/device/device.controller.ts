import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiTags, ApiResponse} from '@nestjs/swagger';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.deviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
  update(@Param() params, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.deviceService.update(params.id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceService.remove(+id);
  }
}

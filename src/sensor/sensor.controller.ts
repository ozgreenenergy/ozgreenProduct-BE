import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth,getSensorParam,deleteSensorParam,getSensorBody,getSensorOperation,sensorTags, loginTags } from '../common/swagger';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @UseGuards(AuthGuard('jwt'))
  @sensorTags()
  @Post()
  @getSensorBody()
  @ApiBearerAuth('token')
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.create(createSensorDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @sensorTags()
  @ApiBearerAuth('token')
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const result = await this.sensorService.findAll(page, limit);
    return {
      data: result.data,
      page: result.page,
      limit: result.limit,
      total: result.total,
    };
    // return this.sensorService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @sensorTags()
  @getSensorParam()
  @ApiBearerAuth('token')
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id, "id")
    return this.sensorService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @sensorTags()
  @Put(':id')
  @getSensorBody()
  @ApiBearerAuth('token')
  update(@Param('id') id: number, @Body() updateSensorDto: UpdateSensorDto) {
    return this.sensorService.update(id, updateSensorDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @sensorTags()
  @deleteSensorParam()
  @ApiBearerAuth('token')
  remove(@Param('id') id: number) {
    return this.sensorService.remove(id);
  }
}

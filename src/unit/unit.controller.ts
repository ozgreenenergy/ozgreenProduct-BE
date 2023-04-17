import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { UnitService } from './unit.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth,getUnitBody,getUnitOperation,unitTags, getUnitParam, deleteUnitParam } from '../common/swagger';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @UseGuards(AuthGuard('jwt'))
  @unitTags()
  @Post()
  @getUnitBody()
  @ApiBearerAuth('token')
  create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitService.create(createUnitDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @unitTags()
  @ApiBearerAuth('token')
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const result = await this.unitService.findAll(page, limit);
    return {
      data: result.data,
      page: result.page,
      limit: result.limit,
      total: result.total,
    };
    // return await this.unitService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @unitTags()
  @getUnitParam()
  @ApiBearerAuth('token')
  @Get(':id')
  findOne(@Param() params) {
    return this.unitService.findOne(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @unitTags()
  @Put(':id')
  @getUnitBody()
  @ApiBearerAuth('token')
  update(@Param() params, @Body() updateUnitDto: UpdateUnitDto) {
    return this.unitService.update(params.id, updateUnitDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @unitTags()
  @deleteUnitParam()
  @ApiBearerAuth('token')
  remove(@Param() params) {
    return this.unitService.remove(params.id);
  }
}

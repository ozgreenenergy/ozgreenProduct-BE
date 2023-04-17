import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavitemService } from './navitem.service';
import { CreateNavitemDto } from './dto/create-navitem.dto';
import { UpdateNavitemDto } from './dto/update-navitem.dto';

@Controller('navitem')
export class NavitemController {
  constructor(private readonly navitemService: NavitemService) {}

  @Post()
  create(@Body() createNavitemDto: CreateNavitemDto) {
    return this.navitemService.create(createNavitemDto);
  }

  @Get()
  findAll() {
    return this.navitemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.navitemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateNavitemDto: UpdateNavitemDto) {
    return this.navitemService.update(id, updateNavitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.navitemService.remove(id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { PortalService } from './portal.service';
import { CreatePortalDto } from './dto/create-portal.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('portal')
export class PortalController {
  constructor(private readonly portalService: PortalService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPortalDto: CreatePortalDto) {
    return this.portalService.create(createPortalDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.portalService.findAll();
  }
}
// 
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth,getRoleParam,deleteRoleParam,getRoleBody,getrolesOperation,rolesTags } from '../common/swagger';
import { AuthGuard } from '@nestjs/passport';

@rolesTags()
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('token')
  @Post()
  @getRoleBody()
  @getrolesOperation()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('token')
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('token')
  @getRoleParam()
  @Get(':id')
  findOne(@Param() params) {
    return this.rolesService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(params.id, updateRoleDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('token')
  @deleteRoleParam()
  @Delete(':id')
  remove(@Param() params) {
    return this.rolesService.remove(params.id);
  }
}

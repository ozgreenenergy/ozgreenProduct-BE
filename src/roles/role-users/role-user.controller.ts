import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleUserService } from './role-user.service';
import { RoleUser, RoleUserDocument } from '../schema/role-user.schema';

@Controller('role-user')
export class RoleUserController {
  constructor(private readonly roleUserService: RoleUserService) {}

  @Post()
  async create(@Body() roleUser: RoleUser): Promise<RoleUserDocument> {
    return this.roleUserService.create(roleUser);
  }

  @Get()
  findAll() {
    return this.roleUserService.getUsers();
  }
}

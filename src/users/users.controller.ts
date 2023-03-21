import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { ApiBearerAuth,getUserParam,deleteUserParam,getUserBody,getUserOperation,userTags, loginTags } from '../common/swagger';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @loginTags()
  @Post('')
  @getUserBody()
  @getUserOperation()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('fullName') fullName: string,
    @Body('status') status: Number,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return this.userService.createUser(username, hashedPassword, fullName, status);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @userTags()
  @ApiBearerAuth('token')
  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @userTags()
  @getUserParam()
  @ApiBearerAuth('token')
  async getMe(@Param() params) {
    return this.userService.getMe(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @userTags()
  @deleteUserParam()
  @ApiBearerAuth('token')
  async delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

}

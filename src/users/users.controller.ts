import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { ApiBearerAuth, userTags } from '../common/swagger';

@Controller('users')
@userTags()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('fullName') fullName: string,
    @Body('status') status: Number,
  ) {
    return this.userService.createUser(username, password, fullName, status);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getMe(@Param() params) {
    return this.userService.getMe(params.id);
  }

}

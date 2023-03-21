import { Controller, Post, Request, UseGuards , HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { getLoginOperation,getLoginBody, loginTags } from '../common/swagger';

@Controller()
@loginTags()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @getLoginOperation()
  @getLoginBody()
  @HttpCode(200)
  async login(@Request() req) {
    return this.authService.loginWithCredentials(req.user);
  }
}

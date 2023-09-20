import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.model';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.usersService.getUser({ username, password });
    if(!user){
      return null
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password )    
    if(!isPasswordMatched){
      return null
    }else{
      return user ?? null;
    }
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.username };

    return {
      username1: user.username,
      userId: user._id,
      status: user.status,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }
}

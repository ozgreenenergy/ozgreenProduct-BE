import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly httpService: HttpService,
  ) {}

  async createUser(username: string, password: string, fullName: string, status: Number, email : string, phone_number : Number, description: string): Promise<User> {
    return this.userModel.create({
      username,
      password,
      fullName,
      email,
      phone_number,
      description,
      status : 1
    });
  }
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser({ username, password }): Promise<User | undefined> {
    return this.userModel.findOne({username});
  }

  async getMe(userId: any): Promise<User | undefined> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw 'User not found';
    }
    return user;
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id).exec();
  }

}

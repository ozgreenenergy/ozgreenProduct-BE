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

  async createUser(username: string, password: string, fullName: string, status: Number): Promise<User> {
    return this.userModel.create({
      username,
      password,
      fullName,
      status : 1
    });
  }
  async getUsers(page: number = 1, limit: number = 10):  Promise<{
    total: number;
    page: number;
    limit: number;
    data: User[];
  }> {
     // Validate page and limit parameters
     page = Number.isInteger(Number(page)) ? Math.max(1, Number(page)) : 1;
     limit = Number.isInteger(Number(limit)) ? Math.max(1, Number(limit)) : 10;

     // Calculate skip and limit values
    const skip = (page - 1) * limit;
    const total = await this.userModel.countDocuments();

    // Retrieve data from the database
    const users = await this.userModel.find().skip(skip).limit(limit).exec();

    // Return paginated results
    return {
      total,
      page,
      limit,
      data: users,
    };
  }

  async getUser({ username, password }): Promise<User | undefined> {
    return this.userModel.findOne({
      username,
      password,
    });
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

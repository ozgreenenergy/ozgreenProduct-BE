import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export interface User {
  _id: string;
  fullName: string;
  username: string;
  password: string;
}

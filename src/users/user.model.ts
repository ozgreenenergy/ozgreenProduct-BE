import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Number },
  email: { type: String, required: true  },
  phone_number: { type: Number, required: true},
  description: { type: String, required: true },
});

export interface User {
  _id: string;
  fullName: string;
  username: string;
  password: string;
  status: Number;
  email: String,
  phone_number: Number,
  description: String,
}

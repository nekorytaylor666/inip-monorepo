import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface Token extends mongoose.Document {
  email: string;
  password: string;
}

export const TokenSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

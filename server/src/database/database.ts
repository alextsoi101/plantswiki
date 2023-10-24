import mongoose from 'mongoose';

const DB_URI: string = process.env.DB_URI;

export default async function connectDB() {
  await mongoose.connect(DB_URI);
}
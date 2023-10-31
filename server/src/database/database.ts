import mongoose from 'mongoose';

export default async function connectDB() {
  await mongoose.connect(
    'mongodb+srv://alextsoi:0FSihzJqs0EXbpTQ@plantweb.7acgcgx.mongodb.net/?retryWrites=true&w=majority'
  );
}
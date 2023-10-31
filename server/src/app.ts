import 'dotenv/config';
import express from 'express';
import connectDB from './database/database';
import * as models from './database/models';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import v1Router from './api/v1/routes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api/v1', v1Router)
// app.use(errorHandler)

const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error(e)
  }
}

start();
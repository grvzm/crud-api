import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use('/api/users', userRoutes);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION);
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening at PORT ${PORT}`);
});

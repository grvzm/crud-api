import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  jobtitle: {
    type: String,
    default: 'Unemployed',
  },
  gender: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSchema);

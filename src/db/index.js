import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/ekreative", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
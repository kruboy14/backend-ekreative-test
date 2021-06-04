import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  picture: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;

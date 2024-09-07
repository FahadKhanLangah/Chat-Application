import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    public_id: String,
    url: String,
  },
  gender: { type: String, enum: ["male", "female"], required: true },

}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id, username : this.username }, process.env.JWT_SECRET_KEY,
    { expiresIn: '1d' }
  )
}

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

export const User = mongoose.model('User', userSchema);

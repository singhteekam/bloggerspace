const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  verificationToken: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetToken: String, // Field for storing the reset token
  resetTokenExpiration: Date, // Field for storing the token expiration date
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateVerificationToken = function () {
  const token = uuidv4(); // Generate a unique verification token using uuid
  this.verificationToken = token;
  return token;
};

const User = mongoose.model("users", userSchema);

module.exports = User;

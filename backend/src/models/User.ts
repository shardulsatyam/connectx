import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Invalid Email"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
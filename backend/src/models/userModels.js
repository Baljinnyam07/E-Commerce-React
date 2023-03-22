import mongoose from "mongoose";
import {nanoid} from "nanoid"

export const User = {
    _id:{
        type:String,
        default:nanoid()
    },
    
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
  role:{
      type:mongoose.Types.ObjectId,
      ref:"UserRole",
  }
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });
import mongoose, { Schema, Document, Model } from "mongoose";

// Define the User interface
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female" | "other";
  fatherName?: string;
  motherName?: string;
  dateOfBirth?: Date;
  userType: "teacher" | "admin" | "manager" | "accountant";
  joiningDate?: Date;
  department?: string;
  permanentAddress: string;
  correspondenceAddress?: string;
  phoneNumber: string;
}

// Create the User schema
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    fatherName: {
      type: String,
      trim: true,
    },
    motherName: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    userType: {
      type: String,
      enum: ["teacher", "admin", "manager", "accountant"],
      required: true,
    },
    joiningDate: {
      type: Date,
    },
    department: {
      type: String,
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    correspondenceAddress: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;

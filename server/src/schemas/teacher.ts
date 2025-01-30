import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Teacher interface
interface ITeacher extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  designation: string;
  joiningDate?: Date;
  qualifications: string;
  address: string;
}

// Create the Teacher schema
const teacherSchema: Schema<ITeacher> = new mongoose.Schema(
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
      trim: true,
      validate: {
        validator: (value: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
      trim: true,
    },
    department: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    joiningDate: {
      type: Date,
    },
    qualifications: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Teacher model
const Teacher: Model<ITeacher> = mongoose.model<ITeacher>(
  "Teacher",
  teacherSchema
);

export default Teacher;

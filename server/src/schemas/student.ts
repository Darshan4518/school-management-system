import mongoose, { Schema, Document, Types } from "mongoose";

// Define types for the schema
interface IStudent extends Document {
  studentName: string;
  fatherName: string;
  motherName: string;
  email: string;
  dateOfBirth: Date | null;
  bloodGroup: string;
  gender: "male" | "female" | "others";
  abilities: string;
  address: string;
  district: "central" | "north" | "south";
  phoneNumber: string;
  taxNumber: string;
  registrationNo: string;
  pincode: string;
  state: "delhi" | "up" | "hr";
  photo?: string;
}

// Define the schema for the student
const studentSchema: Schema<IStudent> = new Schema(
  {
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    email: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    bloodGroup: { type: String, required: false },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: true,
    },
    abilities: { type: String, required: false },
    address: { type: String, required: true },
    district: {
      type: String,
      enum: ["central", "north", "south"],
      required: true,
    },
    phoneNumber: { type: String, required: true },
    taxNumber: { type: String, required: false },
    registrationNo: { type: String, required: false },
    pincode: { type: String, required: true },
    state: { type: String, enum: ["delhi", "up", "hr"], required: true },
    photo: { type: String, default: "/placeholder.svg" },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the model
const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;

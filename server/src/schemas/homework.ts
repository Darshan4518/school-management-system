import mongoose, { Schema, Document, Model } from "mongoose";

interface IHomework extends Document {
  class: string;
  section: string;
  subject: string;
  title: string;
  description: string;
  assignmentDate: Date;
  submissionDate: Date;
  url?: string;
  fileUrl?: string;
  sendSmsToStudents: boolean;
  sendSmsToParents: boolean;
}

const homeworkSchema: Schema<IHomework> = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    assignmentDate: {
      type: Date,
      required: true,
    },
    submissionDate: {
      type: Date,
      required: true,
    },
    url: {
      type: String,
      trim: true,
    },
    fileUrl: {
      type: String,
      trim: true,
    },
    sendSmsToStudents: {
      type: Boolean,
      default: false,
    },
    sendSmsToParents: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Homework: Model<IHomework> = mongoose.model<IHomework>(
  "Homework",
  homeworkSchema
);

export default Homework;

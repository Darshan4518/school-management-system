import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Event interface
interface IEvent extends Document {
  title: string;
  date: Date;
  description: string;
  fileUrl?: string;
  status: "approved" | "unapproved";
}

const eventSchema: Schema<IEvent> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    fileUrl: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["approved", "unapproved"],
      default: "unapproved",
    },
  },
  {
    timestamps: true,
  }
);

// Create the Event model
const Event: Model<IEvent> = mongoose.model<IEvent>("Event", eventSchema);

export default Event;

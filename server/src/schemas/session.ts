import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Session interface
interface ISession extends Document {
  sessionName: string;
  sessionLevel: "primary" | "secondary" | "higher";
  startDate: Date;
  endDate: Date;
  department: "administration" | "academic" | "accounts";
  description: string;
}

// Create the Session schema
const sessionSchema: Schema<ISession> = new mongoose.Schema(
  {
    sessionName: {
      type: String,
      required: true,
      trim: true,
    },
    sessionLevel: {
      type: String,
      required: true,
      enum: ["primary", "secondary", "higher"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (this: ISession, value: Date): boolean {
          return value > this.startDate;
        },
        message: "End date must be after the start date.",
      },
    },
    department: {
      type: String,
      required: true,
      enum: ["administration", "academic", "accounts"],
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Session model
const Session: Model<ISession> = mongoose.model<ISession>(
  "Session",
  sessionSchema
);

export default Session;

import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Class interface
interface IClass extends Document {
  className: string;
  section: string;
  classTeacher: mongoose.Types.ObjectId;
  subjects: string[];
  description?: string;
}

// Create the Class schema
const classSchema: Schema<IClass> = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
      trim: true,
    },
    section: {
      type: String,
      required: true,
      trim: true,
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
      validate: {
        validator: (subjects: string[]) => subjects.length > 0,
        message: "At least one subject must be selected.",
      },
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Class model
const Class: Model<IClass> = mongoose.model<IClass>("Class", classSchema);

export default Class;

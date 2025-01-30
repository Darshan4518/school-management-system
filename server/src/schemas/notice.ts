import mongoose, { Schema, Document, Model } from "mongoose";

interface INotice extends Document {
  class: string;
  section: string;
  title: string;
  content: string;
  linkType: "attachment" | "url";
  link?: string;
  fileUrl?: string;
  status: "approved" | "unapproved";
}

// Create the Notice schema
const noticeSchema: Schema<INotice> = new mongoose.Schema(
  {
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    linkType: {
      type: String,
      required: true,
      enum: ["attachment", "url"],
    },
    link: {
      type: String,
      trim: true,
    },
    fileUrl: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["approved", "unapproved"],
      default: "unapproved",
    },
  },
  {
    timestamps: true,
  }
);

// Create the Notice model
const Notice: Model<INotice> = mongoose.model<INotice>("Notice", noticeSchema);

export default Notice;

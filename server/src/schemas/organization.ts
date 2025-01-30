import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Organization interface
interface IOrganization extends Document {
  billingName: string;
  organizationWebsite: string;
  timezone: string;
  email: string;
  contactNumber: {
    countryCode: string;
    phoneNumber: string;
  };
  registrationNumber: string;
  organizationCode: string;
  address: string;
  state: string;
  district: string;
  country: string;
  pincode: string;
  taxNumber: string;
  gstInfo: string;
  uploadedFiles?: string[];
}

// Create the Organization schema
const organizationSchema: Schema<IOrganization> = new mongoose.Schema(
  {
    billingName: {
      type: String,
      required: true,
      trim: true,
    },
    organizationWebsite: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value: string) =>
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            value
          ),
        message: "Please provide a valid website URL.",
      },
    },
    timezone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Please provide a valid email address.",
      },
    },
    contactNumber: {
      countryCode: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        validate: {
          validator: (value: string) => /^\d+$/.test(value),
          message: "Please provide a valid phone number.",
        },
      },
    },
    registrationNumber: {
      type: String,
      required: true,
      trim: true,
    },
    organizationCode: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /^\d+$/.test(value),
        message: "Please provide a valid pincode.",
      },
    },
    taxNumber: {
      type: String,
      required: true,
      trim: true,
    },
    gstInfo: {
      type: String,
      required: true,
      trim: true,
    },
    uploadedFiles: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the Organization model
const Organization: Model<IOrganization> = mongoose.model<IOrganization>(
  "Organization",
  organizationSchema
);

export default Organization;

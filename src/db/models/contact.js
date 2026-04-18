import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ["work", "home", "personal"],
      required: [true, "Contact type is required"],
      default: "personal",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default mongoose.model("Contact", contactSchema);

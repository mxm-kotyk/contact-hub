import mongoose from "mongoose";
import { handleSaveError, runValidationOnUpdate } from "./hooks.js";
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name for a contact"],
    },
    phoneNumber: String,
    email: String,
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// Hooks
contactSchema.pre("findOneAndUpdate", runValidationOnUpdate);
contactSchema.post(["save", "findOneAndUpdate"], handleSaveError);

const Contact = mongoose.model("contact", contactSchema);

export default Contact;

import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String,
  phoneNumber: String,
  email: String,
});

const Contact = mongoose.model("contact", contactSchema);

export default Contact;

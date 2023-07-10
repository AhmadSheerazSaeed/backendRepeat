import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now() },
});

const userModel = model("users", userSchema);

export default userModel;

import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [2, "Username is too short"],
  },
  email: {
    type: String,
    required: [true, "User email is required!"],
    minLength: [10, "Password is too short"],
  },
  password: {
    type: String,
    required: [true, "User password is required!"],
    minLength: [4, "Password is too short"],
  },
});

//Hashing the password on save
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = model("User", userSchema);

export default User;

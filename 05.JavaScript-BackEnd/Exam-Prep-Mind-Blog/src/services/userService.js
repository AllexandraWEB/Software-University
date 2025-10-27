import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateAuthToken } from "../utils/tokenUtils.js";

// Register
export async function register(email, username, password, repeatPassword) {
  const user = await User.findOne({ email });

  if (user) {
    throw new Error("Email already exists!");
  }

  if(password !== repeatPassword) {
    throw new Error("Password must match!")
  }

  const createdUser = await User.create({ email, username, password, repeatPassword });

  const token = generateAuthToken(createdUser);

  return token;
}

// Login
export async function login(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password!");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid email or password!");
  }

  const token = generateAuthToken(user);

  return token;
}

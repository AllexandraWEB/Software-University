import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export function generateAuthToken(user) {
  // Create payload and token
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  // TODO - Update the missing model atribute inside payload

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

  return token;
}

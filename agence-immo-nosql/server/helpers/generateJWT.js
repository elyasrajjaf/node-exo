import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

export default function generateJwt(id) {
  const payload = {
    user: {
      id,
    },
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });
}

import * as dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

export default async function connectDB() {
  try {
    const connection = await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB => ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
}

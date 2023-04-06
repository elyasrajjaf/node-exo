import * as dotenv from "dotenv";
import app from "./server.js";
import connectDB from "./config/database.js";

dotenv.config();

function main() {
  try {
    connectDB();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
}

main();

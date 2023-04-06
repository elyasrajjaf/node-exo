import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./database.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Settings
app.use(morgan("dev"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.set("view engine", "pug");
app.set("views", "./templates");

app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", authRoutes);

// Starting the server
function main() {
  try {
    connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import dayjs from "dayjs";
import { addStudent, getStudents, removeStudent } from "./utils.js";

const app = express();

dotenv.config();

const PORT = process.env.APP_PORT || 3000;

// Définir le "__dirname"
const __dirname = path.resolve();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/add-student", (req, res) => {
  const { name, birth } = req.body;

  addStudent(name, dayjs(birth).format("DD MMMM YYYY"));

  res.redirect("/");
});

app.get("/students", (req, res) => {
  const students = getStudents();
  res.render("students", { students });
});

app.post("/remove-student", (req, res) => {
  const { name } = req.body;

  removeStudent(name);

  res.redirect("/students");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

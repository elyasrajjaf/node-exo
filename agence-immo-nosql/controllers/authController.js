import User from "../models/User.js";

export const login = (req, res) => {
  res.render("auth/login", {
    title: "Se connecter",
  });
};

export const createAccount = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ error: "Email already exists" });
  }

  try {

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const register = (req, res) => {
  res.render("auth/register", {
    title: "S'inscrire",
  });
};

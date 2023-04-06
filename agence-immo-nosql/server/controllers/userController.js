import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateJwt from "../helpers/generateJWT.js";

export const register = async (req, res) => {
  const { email, password, firstname, lastname, civilite, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      civilite,
      phone,
      token: ""
    });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json({ message: "User not exists" });
  }

  if (user && (await bcrypt.compare(password, user.password))) {

    await user.updateOne({
      token: generateJwt(user._id),
    })

    res.status(200).json({
      _id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      civilite: user.civilite,
      phone: user.phone,
      token: user.token,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

import { User } from "../models/user.model.js";
import asyncHandler from 'express-async-handler';
 import { generateToken } from "../config/generateToken.js";
import bcryptjs from "bcryptjs"


export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
const hashedPassword = bcryptjs.hashSync(password, 10)
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),//generatetoken is a function in config
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});


export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email })
const validPassword = bcryptjs.compareSync(password, validUser.password)
  if (validUser &&validPassword) {
    res.json({
      _id: validUser._id,
      name: validUser.name,
      email: validUser.email,
      isAdmin: validUser.isAdmin,
      pic: validUser.pic,
      token: generateToken(validUser._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});




 
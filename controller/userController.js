import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Auth user/set Token
//route POST /api/users/auth
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

//@desc Register a new User
//route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@desc Logout User
//route POST /api/users/logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout out" });
});

//@desc Get user Profile
//route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };
  res.status(200).json(user);
});
//@desc Update user Profile
//route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    (user.username = req.body.username || user.username),
      (user.email = req.body.email || user.email);
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res
      .status(200)
      .json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
      });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};

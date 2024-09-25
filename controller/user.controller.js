import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check for required fields
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await newUser.save();

    // Send success response
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id : newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Signup Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // If successful, send a response with user details
    res.status(200).json({
      message: "User successfully logged in",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

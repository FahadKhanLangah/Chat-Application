import { User } from "../models/user.model.js";


export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password, gender } = req.body;
    if (!name || !username || !email || !password || !gender) {
      return res.status(409).json({
        success: false,
        message: "All Fields are required"
      })
    }
    const user = await User.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    })
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User with email or user name already exists try another one"
      })
    }
    const newUser = await User.create({
      name, email, password, gender, username
    })
    res.status(201).json({
      success: true,
      user: newUser
    })
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error.message
    })
  }
}
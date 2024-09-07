import { User } from "../models/user.model.js";
import cloudinary from 'cloudinary'


export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password, gender } = req.body;
    if (!name || !username || !email || !password || !gender) {
      return res.status(409).json({
        success: false,
        message: "All Fields are required"
      })
    }
    if (!req.file) {
      return res.status(409).json({
        success: false,
        message: "Profile pic is required"
      })
    }
    let myCloud;
    if (req.file.path) {
      myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Chat _Profile",
        width: 200,
        crop: "scale"
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
      name, email, password, gender, username,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
      }
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
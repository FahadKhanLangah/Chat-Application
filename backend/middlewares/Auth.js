import jwt from 'jsonwebtoken';

export const isAuth = async (req, res, next) => {
  try {
    const {token} = req.cookies

    if (!token) {
      return res.status(404).json({
        message: "Access Denied Please Login First",
        success: false,
      })
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Token Expired login again",
        success: false,
      })
    }
    req.user = decoded.id;
    req.username = decoded.username;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
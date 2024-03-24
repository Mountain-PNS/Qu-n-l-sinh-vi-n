import User from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const SignUp = async (req, res) => {
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    if (!passwordHash) {
     return res.status(400).json({
        status: "ERROR",
        message: "Mã hóa mật khẩu không thành công",
      });
    }
    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) {
     return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    };
    const data = await User.create(user);
    if (!data) {
     return res.status(400).json({
        status: "ERROR",
        message: "Đăng ký thất bại",
      });
    }
    return res.status(200).json({
      status: "Đăng ký thành công",
      message: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const SignIn = async (req, res) => {
    try {

      const checkEmail = await User.findOne({ email: req.body.email });
      if (!checkEmail) {
       return res.status(400).json({
          status: "ERROR",
          message: "Email chưa đăng ký",
        });
      }
      const checkPassword = await bcrypt.compare(req.body.password, checkEmail.password);
      if(!checkPassword){
       return res.status(400).json({
          status: "ERROR",
          message: "Mật khẩu không chính xác",
        });
      }
      const token = jwt.sign({id:checkEmail._id},process.env.SECRET_KEY,{expiresIn: "1d"})
      if(!token){
       return res.status(400).json({
          status: "ERROR",
          message: "Tạo token không thành công",
        });
      }
      checkEmail.password = undefined;
      return res.status(200).json({
        status: "Đăng nhập thành công",
        message: {
          id: checkEmail._id,
          name: checkEmail.name,
          email: checkEmail.email,
          token: token,
        }

      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
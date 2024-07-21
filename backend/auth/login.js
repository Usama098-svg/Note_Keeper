const myExpress = require('express')
const myRouter = myExpress.Router()
const myUser = require('../models/user.model')


// login
myRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: true, message: "Email is required" });
    }
  
    if (!password) {
      return res.status(400).json({ error: true, message: "Password is required" });
    }
  
    const userInfo = await myUser.findOne({ email: email });
  
    if (!userInfo) {
      return res.status(400).json({ error: true, message: "User not found" });
    }
  
    if (userInfo.email == email && userInfo.password == password) {
      return res.json({
        error: false,
        email,
        message: "Login successfully"
      });
    } else {
      return res.status(400).json({
        error: true,
        message: "Invalid credentials"
      });
    }
  });

  module.exports = myRouter
const myExpress = require('express');
const myRouter = myExpress.Router();
const myUser = require('../models/user.model');
const { body, validationResult } = require("express-validator");

// create an account
myRouter.post('/', [
  body("email", "Email is not valid").isEmail(),
  body("password", "Password cannot be null").exists(),
  body("name", "Please write your name").exists()
], async (req, res) => {
  let mySuccess = false;
  const myError = validationResult(req); // getting error by validationResult over "req"

  if (!myError.isEmpty()) { // if error exists
    // error status along with errors in array format
    // sending bad request (code: 400) with some JSON
    return res.status(400).json({ errorExistAsBelow: myError.array() });
  }

  try {
    let myemail = req.body.email;
    let existemail = await myUser.findOne({ email: myemail }); // Fixing typo: Users -> myUser

    if (existemail) {
      return res.status(400).json({
        success: mySuccess,
        errorExistAsBelow: "Sorry, this email already exists"
      });
    }

    let myname = req.body.name;
    let myfname = req.body.fname;
    let mypassword = req.body.password;
    let myconfirmpassword = req.body.confirmpassword;
    let mystatus = req.body.status;

    if(mypassword !== myconfirmpassword){
    return  res.status(400).json({
        error:true,
        message:"Password and confirm password does not match"
      })
    }

    let savingData = {
      email: myemail,
      name: myname,
      fname: myfname,
      password: mypassword,
      confirmpassword: myconfirmpassword,
      status: mystatus
    };

    let myData = new myUser(savingData); // Instantiate a new user
    await myData.save();

    mySuccess = true;
    let resData = {
      message: "Data has been inserted successfully",
      insertedData: savingData,
      success: mySuccess,
      newUserFromData: myData
    };

    res.status(201).json(resData); // Send 201 status for successful creation
  } catch (e) {
    console.error("Error:", e);
    res.status(500).json({ error: "Internal Server Error" }); // Send 500 status for server error
  }
});

module.exports = myRouter;

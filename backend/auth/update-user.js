const mongoose = require("mongoose")
const express = require("express")
const myRouter = express.Router()
const myUser = require("../models/user.model")


//update user
myRouter.put('/:reqID4Update', async (req, res) => {
    let mySuccess = false;
    let IdUpdating = req.params.reqID4Update;
  
    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(IdUpdating)) {
      return res.status(400).send({ success: mySuccess, message: "Invalid ID format" });
    }
  
    try {
      // First checking; either the ID exists or not
      const getUser = await myUser.findById(IdUpdating);
  
      // Sending response if there is no data in the database against requested-ID
      if (!getUser) {
        return res.status(404).send({ success: mySuccess, message: "No User Found for this ID" });
      }
  
      let newname = req.body.newname;
      let newfname = req.body.newfname;
      let newpassword = req.body.newpassword;
      let newstatus = req.body.newstatus;

      // if(!newname){
      //   return res.status(404).send({ success: mySuccess, message: "Required name" });
      // }
      // if(!newfname){
      //   return res.status(404).send({ success: mySuccess, message: "Required father name" });
      // }
      // if(!newpassword){
      //   return res.status(404).send({ success: mySuccess, message: "Required password" });
      // }
      // if(!newstatus){
      //   return res.status(404).send({ success: mySuccess, message: "Required status" });
      // }
  
      let newData = {};
      if (newname) newData.name = newname;
      if (newfname) newData.fname = newfname;
      if (newpassword) newData.password = newpassword;
      if (newstatus) newData.status = newstatus;
  
      // Updating the data in database
      const updatedData = await myUser.findByIdAndUpdate(IdUpdating, { $set: newData }, { new: true });
  
      mySuccess = true;
  
      // Just display the updated note
      res.json({ updatedData: updatedData, success: mySuccess });
  
    } catch (e) {
      console.error(e);
      res.status(500).send({ success: mySuccess, message: "Internal Server Error" });
    }
  });

  module.exports = myRouter
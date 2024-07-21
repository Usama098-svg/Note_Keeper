const express = require("express")
const myRouter = express.Router()
const myUser = require("../models/user.model")


//delete account
myRouter.delete('/:reqID4Delete', async (req, res) => {
    let mySuccess = false
    let delID = req.params.reqID4Delete
  
    try {
      //getting the data that is being deleted. Data's ID will be in URL/API
      const getUser = await myUser.findById(delID)
  
      //sending response if there is no data in the database against requested-ID
      if (!getUser) {
        return res.status(404).send({ success: mySuccess, message: "No User Found for this ID" })
      }
      const deletedUser = await myUser.findByIdAndDelete(delID)
  
      //displaying success message and deleted-data
      mySuccess = true
      let sendResponseData = {
        deletedData: deletedUser, success: mySuccess, message:"Deleted successfully"
      }
      res.json(sendResponseData)
    }
    catch (e) {
      res.status(400).send({ success: mySuccess, message: "Internal Server Error" })
    }
  });

  module.exports = myRouter
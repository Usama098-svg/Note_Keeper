const express = require("express")
const myRouter = express.Router()
const Note = require("../models/note.model")

//all-notes
myRouter.get('/', async (req, res) => {
    mySuccess = false
    try {
        const getNotes = await Note.find({})
        mySuccess = true
        res.json({ getData: getNotes, success: mySuccess })
    } catch (e) { //parameter is compulsory for usage of catch()
        res.status(500).send({ success: mySuccess, message: "Internal Server Error" })
    }
  });

  module.exports = myRouter
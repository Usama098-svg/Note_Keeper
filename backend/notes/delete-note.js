const express = require("express")
const myRouter = express.Router()
const Note = require("../models/note.model")



//delete-note
myRouter.delete('/:noteId', async (req, res) => {
    const noteId = req.params.noteId
    try {
        const getNote = await Note.findOne({_id: noteId})
  
        if(!getNote){
          return res.status(500).json({error:true, message:"note not found"})
        }
  
        const deletedNote = await Note.deleteOne({_id: noteId})
        
        res.json({deletedData:deletedNote , error: false, message:"Note deleted successfully" })
    } catch (e) { //parameter is compulsory for usage of catch()
        res.status(500).send({ error: true, message: "Internal Server Error" })
    }
  });

  module.exports = myRouter
  
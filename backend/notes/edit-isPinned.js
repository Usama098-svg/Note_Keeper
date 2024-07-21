const express = require("express")
const myRouter = express.Router()
const Note = require("../models/note.model")


//edit isPinned
myRouter.put("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;
    const {isPinned } = req.body; // added isPinned
    
    try {
      const note = await Note.findOne({ _id: noteId }); // assuming _id for MongoDB
  
      if (!note) {
        return res.status(404).json({ error: true, message: "Note not found" }); // using 404 for not found
      }
  
     
      note.isPinned = isPinned; // checking for undefined
  
      await note.save();

      return res.json({
        error: false,
        note,
        message: "Updated successfully",
      });
  
    } catch (e) {
      return res.status(500).json({
        error: true,
        message: "Server error",
      });
    }
  });

  module.exports = myRouter
  
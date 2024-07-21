const express = require("express")
const myRouter = express.Router()
const Note = require("../models/note.model")


//edit note
myRouter.put("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;
    const { title, content, tags } = req.body; // added isPinned
  
    if (!title && !content && !tags) { // checking for isPinned
      return res.status(400).json({ error: true, message: "No changes provided" });
    }
    
    try {
      const note = await Note.findOne({ _id: noteId }); // assuming _id for MongoDB
  
      if (!note) {
        return res.status(404).json({ error: true, message: "Note not found" }); // using 404 for not found
      }
  
      if (title) note.title = title;
      if (content) note.content = content;
      if (tags) note.tags = tags;
      
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
  
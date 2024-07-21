require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");
mongoose.connect(config.connectionString);

const Note = require("./models/note.model");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ data: "Hello Usama" });
});

app.use("/all-users", require("../backend/auth/all-users.js"))
app.use("/create-account", require("../backend/auth/create_account.js"))
app.use("/login", require("../backend/auth/login.js"))
app.use("/delete-account", require("../backend/auth/delete-account.js"))
app.use("/update-user", require("../backend/auth/update-user.js"))
app.use("/add-note", require("../backend/notes/add-note.js"))
app.use("/all-notes", require("../backend/notes/all-notes.js"))
app.use("/edit-note", require("../backend/notes/edit-note.js"))
app.use("/edit-isPinned", require("../backend/notes/edit-isPinned.js"))
app.use("/delete-note", require("../backend/notes/delete-note.js"))


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
module.exports = app;

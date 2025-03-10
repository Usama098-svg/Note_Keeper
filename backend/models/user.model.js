const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String , required: true },
    name: { type: String , required: true },
    fname: { type: String },
    password: { type: String , required: true },
    confirmpassword: { type: String , required: true },
    status: { type: String },
})

module.exports = mongoose.model("User", userSchema);
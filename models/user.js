const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: [true, "Please provide a user email"] },
    password: {
        type: String,
        required: [true, "Please provide a user password (hashes)"],
    },
});

module.exports = mongoose.model("User",UserSchema);



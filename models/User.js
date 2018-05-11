const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    lists: {
    	type: Array
    }
});

module.exports = mongoose.model("User", userSchema);
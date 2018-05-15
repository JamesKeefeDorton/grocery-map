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
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }]
});

module.exports = mongoose.model("User", userSchema);
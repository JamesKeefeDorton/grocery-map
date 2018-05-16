const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    items: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("List", listSchema);
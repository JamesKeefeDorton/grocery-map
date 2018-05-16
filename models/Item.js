const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    coordinates: {
        type: String,
        require: true
    },
    price: Number,
    itemlist: [String]

});

module.exports = mongoose.model("Item", itemSchema);
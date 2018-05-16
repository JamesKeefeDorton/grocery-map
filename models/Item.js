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
    coordinates: [Number],
    price: Number,
    

});

module.exports = mongoose.model("Item", itemSchema);
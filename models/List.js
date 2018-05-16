const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
<<<<<<< HEAD
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
=======
    items: {
        type: String,
        require: true
    }
>>>>>>> master
});

module.exports = mongoose.model("List", listSchema);
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/grocerymap",
    {
        useMongoClient: true
    }
);

const inventorySeed = [
    {
        _id: "Toothpaste",
        location: "1",
        coordinates: "1,2",
        price: 2.5,
        itemlist: ['a','b']
    },
    {
        _id: "Oatmeal",
        location: "2",
        coordinates: "2,3",
        price: 3.5,
        itemlist: ['a', 'b']
    },
    {
        _id: "Shampoo",
        location: "3",
        coordinates: "3,4",
        price: 4.5,
        itemlist: ['a', 'b']

    },
    {
        _id: "Rice",
        location: "4",
        coordinates: "4,5",
        price: 5.5,
        itemlist: ['a', 'b']
    },
    {
        _id: "Light Bulbs",
        location: "5",
        coordinates: "5,6",
        price: 6.5,
        itemlist: ['a', 'b']
    }
];

db.Item
    .remove({})
    .then(() => db.Item.collection.insertMany(inventorySeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const db = require("../models");

module.exports = {
    addUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findUser: function (req, res) {
        db.User
            .find({username: req.params.username})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
}
const db = require("../models");

module.exports = {
    findList: function (req, res) {
        db.List
            .find({id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
}
const db = require("../models");

module.exports = {
    findList: (req, res) => {
      db.List
        .find({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}
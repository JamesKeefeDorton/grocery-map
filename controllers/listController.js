const axios = require ("axios");
const db = require("../models");

module.exports = {
    findList: (req, res) => {
      db.List
        .find({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    createList: (req, res) => {
      db.List
        .create(req.body, (err, list) => {axios.put("/api/user/addlist/" + req.params.userid + "/" + list["_id"])})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}
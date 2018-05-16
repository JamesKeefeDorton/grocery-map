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
      /*const ret = */db.List
        .create(req.body, (err, list) => {
          //axios.put()
          return list;
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
        //.then(rtn => {console.log(rtn.connection.params);});
      //return ret;
    }
}
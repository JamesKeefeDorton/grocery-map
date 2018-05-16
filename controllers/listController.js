const axios = require ("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
<<<<<<< HEAD
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
=======
    findAll: function (req, res) {
        db.List
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.List
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("create controller ", req.body);
        db.List
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log("update controller ", req.body);
        db.List
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.List
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
>>>>>>> master

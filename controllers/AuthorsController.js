var Author = require('../models/Author');

module.exports = {

  create: function(req, res) {
    Author.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  read: function(req, res) {
    Author.find().exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  show: function(req, res) {
    Author.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Author.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }
};

const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Winery
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

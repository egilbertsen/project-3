var db = require("../models");

module.exports = function(app) {
    // Get route for retrieving all wineries
  app.get("/api/wineries/", function (req, res) {
    db.Winery.findAll({})
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single winery
  app.get("/api/wineries/:id", function (req, res) {
    db.Winery.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      });
  });
}


//   // Get route for returning wineries of a specific category
//   app.get("/api/wineries/category/:category", function(req, res) {
//     db.Winery.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(data) {
//         res.json(data);
//       });
//   });

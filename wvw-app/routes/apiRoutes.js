
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



var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

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
};



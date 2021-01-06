
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

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  app.get("/api/user_data", function (req, res) {
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

  app.get("/api/lists/:id", function (req, res) {
    db.List.findOne({
      where: {
        userId: req.params.userId
      },
      include: [db.List]
    }).then(function (userList) {
      res.json(userList);
    });
  });

  app.post("/api/lists", function(req, res) {
    db.List.create(req.body).then(function(listPost){
      res.json(listPost)
    })
  })

  app.put("/api/lists", function (req, res) {
    db.List.update(
      req.body,
      {
        where: {
          userId: req.body.userId
        }
      }).then(function (listUpdate) {
        res.json(listUpdate);
      });
  })
}



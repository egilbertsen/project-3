<<<<<<< HEAD
module.exports = {
  Winery: require("./winery"),
  UserList: require("./list"),
  User: require("./user")
};
var unirest = require("unirest");

var req = unirest("POST", "https://mapboxdurationvolodimir-kudriachenkov1.p.rapidapi.com/getCyclingDuration");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "44c27ee2d0msh7900cbe63b02c9bp125d0djsn2e1f44ff0163",
	"x-rapidapi-host": "MapboxDurationvolodimir-kudriachenkoV1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"coordinates": "undefined",
	"accessToken": "pk.eyJ1IjoiamFja3J5YW4xMDEzIiwiYSI6ImNraW01cXYxMDBxMXoyeXFpd3RhZmkwbHAifQ.WPoQcWA-KJD44FHMsbmyNQ"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
=======
'use strict';

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
>>>>>>> 2abf45d064c59681f8208809b9bb6a9916f0b1df

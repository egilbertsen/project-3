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
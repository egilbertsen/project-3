const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 9999;
var passport = require("./config/passport")
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
    secret: "dcbaae7c-5e91-4178-b8ca-2484d69893d6",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./routes/userRoutes")(app);
require("./routes/wineryRoutes")(app);
require("./routes/htmlRoutes.js")(app);


db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});



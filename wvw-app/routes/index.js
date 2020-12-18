const express = require("express");
const passport = require("passport");
const router = express.Router();
const apiRoutes = require("./api");

// Sending API Routes to correct folder

router.use("/api", apiRoutes);


// Else send to react app

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;

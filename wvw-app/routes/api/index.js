const router = require("express").Router();
const wineryRoutes = require("./wineries.js");
const listsRoutes = require("./lists.js");
const usersRoutes = require("./users.js");

router.use("/wineries", wineryRoutes);

router.use("/lists", listsRoutes);

router.use("/users", usersRoutes);

module.exports = router;

const router = require("express").Router();
const wineriesController = require("../../controllers/wineriesController");

//  /api/wineries
router.route("/")
  .get(Controller.findAll)
  .post(wineriesController.create);

//  /api/wineries/:id
router.route("/:id")
  .get(wineriesController.findById)
  .put(wineriesController.update)
  .delete(wineriesController.remove);

module.exports = router;

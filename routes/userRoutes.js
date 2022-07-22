const userController = require("../controllers/userController.js");
const router = require("express").Router();
router.post("/createUser", userController.createUser);
router.get("/allUsers", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

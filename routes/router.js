var express = require("express");
const router = express.Router();
const userController = require("../controllers/view");

router.post("/userRegister", userController.userRegister);
router.post("/userlogin", userController.Userlogin);
router.get("/userget", userController.userget);
router.get("/userget_email", userController.getUserByEmail);
router.post("/user_update", userController.user_update);
router.delete("/user_delete", userController.user_delete);
module.exports = router;

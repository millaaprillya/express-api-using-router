const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
router.get("/home", (req, res) => res.send("This is root!"));
router.get("/getData", (req, res) => res.send("Berhasil"));
module.exports = router;

router.post("/users", controllers.createUser);

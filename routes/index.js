const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
router.get("/home", (req, res) => res.send("This is root!"));
router.get("/getData", controllers.getUser);
router.put("/user/:id", controllers.putUser);
router.post("/users", controllers.createUser);
router.get("/test", (req, res) => {
  res.send(" GOOD ");
});

module.exports = router;

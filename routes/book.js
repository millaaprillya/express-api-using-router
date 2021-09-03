const { Router } = require("express");
const controllers = require("../controllers/Book");
const router = Router();

router.get("/bookme/me", (req, res) => res.send("This is root! Book"));
router.get("/book", controllers.getBook);
router.post("/create", controllers.createBook);
router.put("/updateBook/:id", controllers.putBook);

module.exports = router;

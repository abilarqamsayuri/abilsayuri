const StudentController = 
require("../controllers/StudentController.js");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students", StudentController.destroy);

module.exports = router;
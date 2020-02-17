const express = require("express");
const router = express.Router();
const { reviewController } = require("../controllers");

router.post("/", reviewController.add);
router.get("/", reviewController.list);
router.put("/", reviewController.update);
router.delete("/:id", reviewController.delete);

module.exports = router;

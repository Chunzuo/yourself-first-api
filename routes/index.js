var express = require("express");
var router = express.Router();

const reviewRouter = require("./reviewRouter");

router.use("/review", reviewRouter);

module.exports = router;

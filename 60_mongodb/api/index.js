//const express = require("express");
//const router = express.Router();
const { Router } = require("express");
const router = Router();

router.use("/music", require("./music"));
router.use("/movie", require("./movie"));
router.use("/user", require("./user"));
//router.use("/movie", require("./movie/movie"));

module.exports = router;


const express = require("express");

const { addTestRoute } = require("../controllers/test");

const router = express.Router();

router.post("/addTest", addTestRoute);

module.exports = router;
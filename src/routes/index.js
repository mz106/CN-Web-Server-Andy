
const express = require("express");

const router = express.Router();

const { testGet, testPost,  } = require("../controllers/index");

// test Get
router.get("/test", testGet);

// test Post
router.post("/test", testPost);

module.exports = router;
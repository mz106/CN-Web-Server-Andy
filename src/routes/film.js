
const express = require("express");

const { getFilms } = require("../controllers/film");

const router = express.Router();

router.get("/film", getFilms);

module.exports = router;
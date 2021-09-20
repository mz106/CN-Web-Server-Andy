
const express = require("express");

const { adminTest, adminGetFilms, adminAddFilm } = require("../controllers/admin");

const router = express.Router();

// admin route test
router.get("/", adminTest);

// admin for getting films
router.get("/films", adminGetFilms);

// admin add films
router.post("/films/add", adminAddFilm);

module.exports = router;
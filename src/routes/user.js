
const express = require("express");

const { addUser, findUser, deleteUser, updateUser } = require("../controllers/user");

const router = express.Router();

router.post("/adduser", addUser);

router.get("/finduser", findUser)

router.delete("/deleteuser/:name", deleteUser);

router.put("/updateuser", updateUser);

module.exports = router;
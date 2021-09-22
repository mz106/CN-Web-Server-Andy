
// const bcrypt = require("bcrypt");
const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
    // Using bcrypt
    console.log("hashPassword hit")
    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hash;
    // next()

    //using bcryptjs
    const hash = await bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    next();
};

module.exports = { hashPassword };

const testMiddle = (req, res, next) => {
    try {
        console.log(req.body, "from testMiddle");
        req.user = "michael";
        next();
    } catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
};

module.exports = {
    testMiddle
};
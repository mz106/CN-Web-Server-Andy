
const error = (req, res) => {
    res.status(404).send("Not found");
};

module.exports = {
    error
};
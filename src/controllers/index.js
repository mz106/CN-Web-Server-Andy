
const testGet = (req, res) => {
    res.status(200).json({msg: "testGet has been hit"});
};

const testPost = (req, res) => {
    const name = req.body.name;
    res.status(201).json({msg: `testPost has been hit and the name ${name} posted`});
};

module.exports = {
    testGet,
    testPost
};
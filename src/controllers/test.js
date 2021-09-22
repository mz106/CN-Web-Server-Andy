
const { addTestCrud, listTestCrud } = require("../crudops/test")

const addTestRoute = async (req, res) => {

    try {
        await addTestCrud(req.body.name);
        res.status(201).json({msg: `the test ${req.body.name} has been added`});
    } catch(error) {
        res.status(500).json({msg: `${error}`});
    }    
};

module.exports = {
    addTestRoute
};
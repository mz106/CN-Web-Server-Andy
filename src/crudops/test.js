
const Test = require("../models/test");

const addTestCrud = async (name) => {
    
        const newTest = await Test.build({name});

        await newTest.save();

}

const listTestCrud = async () => {

    return await Test.findAll({attributes: ["name"] });
};

module.exports = {
    addTestCrud,
    listTestCrud
};
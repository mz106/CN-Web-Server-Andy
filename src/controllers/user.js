
const User = require("../models/user");

const addUser = async (req, res) => {
    console.log("add user controllers hit", req.body)
    try {
        const newUser = await User.build({name: req.body.name, email: req.body.email, password: req.body.password});
        
        try {
            console.log(newUser)
            await newUser.save();
        } catch(error) {
            console.log(error)
        }    
        res.status(201).send(`The user ${req.body.name} has been added`);
    } catch (error) {
        res.status(500).send(`Cannot add user ${req.body.name}`)
    }    
    
};

const findUser = async (req, res) => {
    try {
        const foundUser = await User.findAll({where: {name: req.body.name}});
        res.status(200).send({msg: `${foundUser} is on our database`});
    } catch(error) {
        console.log(error);
        res.status(500).send({msg: `${req.body.name} cannot be searched`})
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletion = await User.destroy({where: {name: req.params.name}});
        res.status(200).send({msg: `User: ${req.params.name} - deleted`})
    } catch (error) {
        res.status(500).send({msg: `error: ${error}.`});
    }
};  

const updateUser  = async (req, res) => {
    try {
        const updated = await User.update({name: req.body.name, email: req.body.email, password: req.body.password}, {
            where: { name: req.body.name}
        });
        res.status(201).send({msg: `${req.body.name} has been updated.`})
    } catch(error) {
        res.status(500).send({msg: `error: ${error}.`});
    }
};

module.exports = {
    addUser,
    findUser,
    deleteUser,
    updateUser
};



const adminTest = (req, res) => {
    res.status(200).json({msg: `admin get route hit, ${req.body.name}`});
};

const adminGetFilms = (req, res) => {
    res.status(200).json({msg: "admin get films hit"})
};

const adminAddFilm = (req, res) => {
    const addAllFilms = async (array) => await Product.bulkCreate(array);
    res.status(201).json({msg: `the film ${req.body.name} has been added. `});
};

module.exports = {
    adminTest,
    adminGetFilms,
    adminAddFilm
};
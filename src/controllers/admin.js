
const adminTest = (req, res) => {
    res.status(200).json({msg: "admin get route hit"});
};

const adminGetFilms = (req, res) => {
    res.status(200).json({msg: "admin get films hit"})
};

const adminAddFilm = (req, res) => {
    res.status(201).json({msg: `the film ${req.body.name} has been added. `});
};

module.exports = {
    adminTest,
    adminGetFilms,
    adminAddFilm
};
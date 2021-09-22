
const getFilms = (req, res) => {
    res.status(200).json({msg:"film get hit"});
};



module.exports = {
    getFilms
};
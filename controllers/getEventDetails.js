const getEventDetails = (req, res) => {
    res.render('eventDetail');
}

const getTechnerdDetails = (req, res) => {
    res.render('technerdDetail');
}
module.exports = {
    getEventDetails,
    getTechnerdDetails,
}
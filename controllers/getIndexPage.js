const getIndexPage = (req, res) => {
    res.render('index');
}

const getEventPage = (req, res) => {
    res.render('eventPage');
}

module.exports = {
    getIndexPage,
    getEventPage,
}
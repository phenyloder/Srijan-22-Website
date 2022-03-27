const event_list=require("./event_details_json");

const getEventPage = (req, res) => {
    res.render('eventPage',  {event_list:event_list});
}

module.exports = {
    getEventPage,
}

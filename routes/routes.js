const express = require("express");
const { get } = require("express/lib/response");
const { getIndexPage, getEventPage } = require("../controllers/getIndexPage");

const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/events", getEventPage); // serves event page

module.exports = router;
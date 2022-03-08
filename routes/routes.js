const express = require("express");
const { get } = require("express/lib/response");
const { getEventPage } = require("../controllers/getEventPage")
const { getIndexPage } = require("../controllers/getIndexPage");
const { getRegisterPage } = require("../controllers/getRegisterPage");
const { getOurTeamPage } = require("../controllers/getOurTeamPage");
const { getOurSponsorsPage } = require("../controllers/getOurSponsorsPage");


const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/events", getEventPage); // serves event page
router.get("/register", getRegisterPage); //serves register page
router.get("/our-team", getOurTeamPage); //serves our-team page
router.get("/sponsors", getOurSponsorsPage); //serves our-sponsers page

module.exports = router;
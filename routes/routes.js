const express = require("express");
const { get } = require("express/lib/response");
const { getIndexPage } = require("../controllers/getIndexPage");
const { getRegisterPage } = require("../controllers/getRegisterPage");
const { getOurTeamPage } = require("../controllers/getOurTeamPage");


const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/register", getRegisterPage); //serves register page
router.get("/our-team", getOurTeamPage); //serves our-team page

module.exports = router;
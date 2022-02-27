const express = require("express");
const { get } = require("express/lib/response");
const { getIndexPage } = require("../controllers/getIndexPage");
const { getRegisterPage } = require("../controllers/getRegisterPage");

const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/register", getRegisterPage); //serves register page

module.exports = router;
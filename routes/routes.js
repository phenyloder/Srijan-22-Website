const express = require("express");
const { get } = require("express/lib/response");
const { getIndexPage } = require("../controllers/getIndexPage");

const router = express.Router();

router.get("/", getIndexPage); // serves index page

module.exports = router;
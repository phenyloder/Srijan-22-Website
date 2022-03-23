const express = require("express");
const { get } = require("express/lib/response");
const { getEventPage } = require("../controllers/getEventPage");
const { getIndexPage } = require("../controllers/getIndexPage");
const { getLaunchPage } = require("../controllers/getIndexPage");
const { getRegisterPage } = require("../controllers/getRegisterPage");
const { getOurTeamPage } = require("../controllers/getOurTeamPage");
const { getOurDevelopersPage } = require("../controllers/getOurDevelopersPage");
const { getOurSponsorsPage } = require("../controllers/getOurSponsorsPage");
const { getPrivacyPolicy } = require("../controllers/getPrivacyPolicy");
const { getRefundPolicy } = require("../controllers/getRefundPolicy");
const { getTermsConditions } = require("../controllers/getTermsConditions");
const { getEventDetails } = require("../controllers/getEventDetails");
const User = require("../models/registerinfo");
const PitchPlease = require("../models/pitchPlease");

const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/events", getEventPage); // serves event page
router.get("/register", getRegisterPage); //serves register page
router.get("/register/pitch-please", getRegisterPage); //serves register page
router.get("/our-team", getOurTeamPage); //serves our-team page
router.get("/our-developers", getOurDevelopersPage); //serves our-team page
router.get("/sponsors", getOurSponsorsPage); //serves our-sponsers page
router.get("/privacyPolicy", getPrivacyPolicy); //serves privacy-policy page
router.get("/refund-policy", getRefundPolicy); //serves refund-policy page
router.get("/terms&conditions", getTermsConditions); //serves terms and conditions page
router.get("/events/pitchPlease", getEventDetails); //serves details of event

router.post("/register", async (req, res) => {
  //console.log(req.body.fname.length)
  let team_members = [];
  //console.log(req.body.fname[0]);
  for (let i = 0; i < req.body.name.length; i++) {
    let data = {
      name: req.body.name[i],
      email: req.body.email[i],
      cnumber: req.body.cnumber[i],
      gender: req.body.gender[i],
    };
    team_members.push(data);
  }

  const user = new User({
    tname: req.body.tname,
    members: team_members,
    // ...req.body
  });
  const result = await user.save();
  // res.send("data saved successfully");
  res.render("register");
});
router.post("/register/pitch-please", async (req, res) => {
  try {
    //console.log(req.body.fname.length)
    let team_members = [];
    //console.log(req.body.fname[0]);
    for (let i = 0; i < req.body.name.length; i++) {
      let data = {
        name: req.body.name[i],
        email: req.body.email[i],
        cnumber: req.body.cnumber[i],
        gender: req.body.gender[i],
      };
      team_members.push(data);
    }

    const pitchPlease = await PitchPlease.create({
      tname: req.body.tname,
      members: team_members,
    });
    // console.log(pitchPlease);
    await pitchPlease.save();
    // res.send("data saved successfully");
    res.render("index");
  } catch (err) {
    console.log("ERR", err);
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

router.get("/LaunchPage", getLaunchPage); // serves lauch page
module.exports = router;

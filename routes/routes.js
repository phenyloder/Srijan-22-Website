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
const Pitch = require("../models/pitchPlease");
const event_list=require("../controllers/event_details_json");
const { getCollaborationPage } = require("../controllers/getCollaborationPage");


const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/events", getEventPage); // serves event page
router.get("/register/:event_id", (req, res) => {
    const event_id=req.params.event_id
  res.render('register',{event_list: event_list, event_id: event_id});
}

// getRegisterPage
); //serves register page
// router.get("/register/:event_id", getRegisterPage); //serves register page
router.get("/our-team", getOurTeamPage); //serves our-team page
router.get("/our-developers", getOurDevelopersPage); //serves our-team page
router.get("/sponsors", getOurSponsorsPage); //serves our-sponsers page
router.get("/privacyPolicy", getPrivacyPolicy); //serves privacy-policy page
router.get("/refund-policy", getRefundPolicy); //serves refund-policy page
router.get("/terms&conditions", getTermsConditions); //serves terms and conditions page
router.get("/collaboration", getCollaborationPage); //serves terms and conditions page

//router.get("/events/pitchPlease", getEventDetails);  //serves details of event
//router.get("/events/technerd", getTechnerdDetails);  //serves details of event
router.get("/events/:event_name",function(req,res){
    const event_id=req.params.event_name;
    res.render('eventDetail',{event_id:event_id,event_list:event_list});
});


router.post("/register/:event_name", async (req, res) => {
  //console.log(req.body.fname.length)
  const event_name=req.params.event_name;
  // console.log(event_name);
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
    event_name:event_name,
    tname: req.body.tname,
    members: team_members,
    // ...req.body
  });
  const result = await user.save();
  // res.send("data saved successfully");
  res.render("index");
});
// router.post("/register/pitch-please", async (req, res) => {
//   //console.log(req.body.fname.length)
//   let team_members = [];
//   //console.log(req.body.fname[0]);
//   for (let i = 0; i < req.body.name.length; i++) {
//     let data = {
//       name: req.body.name[i],
//       email: req.body.email[i],
//       cnumber: req.body.cnumber[i],
//       gender: req.body.gender[i],
//     };
//     team_members.push(data);
//   }

//   const user = new Pitch({
//     tname: req.body.tname,
//     members: team_members,
//     // ...req.body
//   });
//   const result = await user.save();
//   // res.send("data saved successfully");
//   res.render("index");
// });

router.get("/LaunchPage", getLaunchPage); // serves lauch page
module.exports = router;

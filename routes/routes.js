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
const events_list=require("../public/js/event_details_json");
// const events_list = [
//   {
//       id: "pitch_please",
//       name: "Pitch Please",
//       is_team_event: true,
//       min_team_members: 1,
//       max_team_members: 4,
//       event_type: "competition",
//       poster_img: "pitchpleases.png",
//       is_registering: true,
//       stages_timeline: [
//           {
//               stage_id: "stage_1",
//               stage_name: "Stage 1 (Online Screening)",
//               stage_start_datetime: "11:59 pm, 10 April 2021",
//               stage_end_datetime: "",
//           },
//           {
//               stage_id: "stage_2",
//               stage_name: "Stage 2 (Pitching)",
//               stage_start_datetime: "11:59 pm, 10 April 2021",
//               stage_end_datetime: "",
//           }
//       ],
//       content: {
//           overview: ["'It's not just about ideas, it's about making the ideas happen.'", "Innovation is the new way of life for most entrepreneurs in an ever more competitive and global economy. Great ideas result in great word of honour paving the way to success. In realization to this vision the fraternity of E-cell NIT Silchar is elated to announce the arrangement of a pitch competition to be held as a part of Srijan 3.0 for the budding entrepreneurs."],
//           outcome: ["Aiming to provide the right stage to showcase the business ideas and models, creating potentiality of early-stage startups help ignite the enthusiastic minds. To evaluate their plan in a risk-free environment by panel of judges would bridge the gap between ideas and reality of an enterprise.", "The competition is open for all. Pitch your plans."],
//           guidelines: ["-> You can participate individually or in a team of a maximum of 4 members.", "-> Please make your pitch-deck submission in this link: https://forms.gle/h8mLAiQwoX36cuVw8", "The judges and the date for the final pitching round will be revealed soon!"],
//           stages: [
//               {
//                   stage_id: "stage_1",
//                   stage_name: "Stage 1 (Online Screening)",
//                   stage_content: ["", ""],
//                   stage_rules: ["Interested teams should submit a PPT about their prospective business plan/idea (in not more than 20 slides).", "The PPT should highlight the following points: Problem, Solution,  Market Size, Market analysis (TAM, SAM, SOM), Competition, traction (if you have any), Business model, Timing (why is it the right time to go ahead with the idea), team background, financial projections (if you have any), product demo (if possible), raise amount. Try to keep the ppt as simple and sleek as possible. Brevity will be appreciated.", "Please find all the resources to creating a good pitch deck here: https://bit.ly/pitchpleaseresources"],
//               },
//               {
//                   stage_id: "stage_2",
//                   stage_name: "Stage 2 (Pitching)",
//                   stage_content: ["", ""],
//                   stage_rules: ["The shortlisted teams will have to pitch their idea in front of an expert investor (or panel).", "Time Limit: 8 mins (6 mins pitch + 2 mins QnA)"],
//               }
//           ]
//       }
//   },
//   {
//     id: "technerds",
//     name: "Technerds",
//     is_team_event: true,
//     min_team_members: 2,
//     max_team_members: 4,
//     event_type: "competition",
//     poster_img: "pitchpleases.png",
//     icon_img: "",
//     is_registering: true,
//     stages_timeline: [
//         {
//             stage_id:"Last_date_of_submission",
//             stage_name:"Last Date of Submission of Document",
//             stage_start_datetime: " 7 April 2022",
//             stage_end_datetime: "",
//         },
//         {
//             stage_id: "stage_1",
//             stage_name: "Stage 1",
//             stage_start_datetime: "9:00 am, 9 April 2022",
//             stage_end_datetime: "",
//         },
//         {
//             stage_id: "stage_2",
//             stage_name: "Stage 2 ",
//             stage_start_datetime: "11:00 am, 10 April 2022",
//             stage_end_datetime: "",
//         }
//     ],
//     content: {
//         overview: ["In this fast-paced global world, technology is flourishing at a tremendous rate and has become a cornerstone in making a concept develop into reality", "Are you excited to flaunt your technological prowess and help in resolving real-world issues?"],
//         outcome: ["Here it is!! The right place for you. Srijan 3.0 provides you with a sporting chance, Technerd, a competition that allows you to demonstrate your technical expertise. Utilize your technical competencies to overcome all the barriers to your idea and bring about a satisfactory output that is beneficial to everyone.", "So, what are you waiting for?Come up with your crew and show your unabashed technical expertise by devising a solution for a given problem statement."],
//         guidelines: ["2-4 People in Each Team(min. 2, max. 4)"],
//         stages: [
//             {
//                 stage_id: "stage_1",
//                 stage_name: "Stage 1 (Technical Presentation)",
//                 stage_content: ["", ""],
//                 stage_rules: ["->Teams must have at least 2 and at max members to be a valid participating team.", "->Teams have to submit their solution on the given problem statement for their solution to be considered valid","->Members of one team should only be registered once. If any discrepancies are found, and a member of the team is found in more than one team, both the teams will be disqualified.","Teams are required to submit the solution to only one problem statement. Only the submission at the time of closing will be considered a valid submission.","The teams will be required to submit a document of not more than 500 words and 3-4 pictures after registering for the event","->The submission should be mailed to technerds.srijan@gmail.com on or before 11.59 PM, 7 April 2022","->Following the initial screening, the participating teams will be invited in front of a panel of judges, who shall judge the idea’s technical viability and question the participants regarding the implementation of their said ideas.","->The top 10 selected teams will be sent to the next round."],
//             },
//             {
//                 stage_id: "stage_2",
//                 stage_name: "Stage 2(Economic Expansions and Implementation Discussion)",
//                 stage_content: ["", ""],
//                 stage_rules: ["->Same rules", "->The marking is subject to the judge","->The selected teams have to brief the judge about the economic viability, expanding capability and scalability of their idea, and present the overall business model, along with an estimation of their gross net revenue over a year."],
//             }
//         ]
//     }
//   }
// ]



const router = express.Router();

router.get("/", getIndexPage); // serves index page
router.get("/events", getEventPage); // serves event page
router.get("/register/:event_id", (req, res) => {
    const event_id=req.params.event_id
  res.render('register',{events_list,event_id});
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

//router.get("/events/pitchPlease", getEventDetails);  //serves details of event
//router.get("/events/technerd", getTechnerdDetails);  //serves details of event
router.get("/events/:event_name",function(req,res){
    const event_id=req.params.event_name;
    res.render('eventDetail',{event_id:event_id,event_list:events_list});
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

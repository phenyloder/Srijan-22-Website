//jshint esversion:6

//requiring pakages
const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");

const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("event");
})


//listen to the port 3000
app.listen(3000,function(){
  console.log("Server is runnig in port 3000");
});

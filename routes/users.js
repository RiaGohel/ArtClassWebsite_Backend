var express = require('express');
var router = express.Router();
const Info = require("../models/info");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/demorequest", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let timestamp = new Date();
  let time = req.body.time;
  let date = req.body.date;
  let status = "Demo requested"
  let phoneno = req.body.phoneno;
  if (!name || !email || !time || !date) {
    res.send("All details not provided");
  }
  let user = new Info({
    name,
    email,
    time,
    date,
    timestamp,
    status,
    phoneno,
  });
  user
    .save()
    .then((status) => {
      res.send("Info saved");
      console.log(status);
    })
    .catch((err) => {
      res.send("Not saved");
      console.log(err);
    });
});

module.exports = router;

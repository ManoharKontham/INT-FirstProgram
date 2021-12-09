var express = require('express');
const User = require("../models/users") 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/", async (req, res) => {
	const user = new User({
	  Username: req.body.Username,
    Password: req.body.Password,
    Ethereum_Address : req.body.Ethereum_Address,
    Aadhar_Number : req.body.Aadhar_Number,
    Phone_Number : req.body.Phone_Number
	})
	await user.save()
	res.send(user)
})

module.exports = router;

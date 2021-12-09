const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Username: {
       type: "String"
    },
	Password: {
        type: "String"
     },
    Ethereum_Address : {
        type: "String"
     },
    Aadhar_Number : {
        type: "String"
     },
    Phone_Number : {
        type: "String"
     }
})

module.exports = mongoose.model("Users", schema)
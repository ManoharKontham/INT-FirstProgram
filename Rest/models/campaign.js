const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: {
       type: "String"
    },
	name: {
        type: "String"
     },
    Username : {
        type: "String"
     },
    start_date : {
        type: "String"
     },
    account_type : {
        type: "String"
     }
})

module.exports = mongoose.model("Campaign", schema)
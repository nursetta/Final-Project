var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||
				 "mongodb://localhost/qualifi-app");

module.exports.Borrower= require("./borrower.js");

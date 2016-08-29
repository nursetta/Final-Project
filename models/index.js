var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/qualifi-app");

module.exports.Borrower= require("./borrower.js");

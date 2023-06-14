var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var data1 = new Schema({
  username: String,
  email: String,
  password: String,
  phone_number: String,

});

module.exports = mongoose.model("user", data1);

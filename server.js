var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT;
var db = "mongodb://localhost/user_details";
var user = require("./routes/router");

var dbconnection = mongoose.connect(db).then(() => {
  console.log("connection successfull");
}).catch(()=>{
    console.log('connection unsuccessfull')
})

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/user", user);

app.get("/", function (req, res) {
  console.log("app starting on the port: " + port);
  res.send("test express nodejs mongodb");
});

app.listen(port, function () {
  console.log("app listening on the port: " + port);
});

var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve", function(req, res) {
  var newRez = req.body;
  console.log(newRez);
  res.json(newRez);
  //build this out more
});

app.get("/api/tables", function(req, res) {
  console.log(res.json());
  //build this out more
});

app.get("/api/waitlist", function(req, res) {
  console.log(res.json());
  //build this out more
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
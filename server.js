var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Starting Reservations
var reservations=[
  {
    customerName: "Oscar the Grouch",
    customerEmail: "Oscar@sesamest.com",
    phoneNumber: "222-222-2222",
    customerID: 1
  },
  {
    customerName: "Big Bird",
    customerEmail: "BigBird@sesamest.com",
    phoneNumber: "444-444-4444",
    customerID: 2 
  },
  {
    customerName: "Ernie",
    customerEmail: "Ernie@sesamest.com",
    phoneNumber: "222-222-2222",
    customerID: 3 
  }
]

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reserve.html"));
});

app.post("/reserve", function(req, res) {
  var newRez = req.body;
  console.log(newRez);
  res.json(newRez);
  //build this out more
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  console.log(res.json());
  //build this out more
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
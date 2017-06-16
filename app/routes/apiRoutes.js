var reservations = require("../data/reservations");
var waitlist = require("../data/waitlist");

module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
    if (reservations.length < 5){
      reservations.push(req.body);
      res.json(true);
    }
    else{
      waitlist.push(req.body);
      res.json(false);
    };
  });

  app.post("/api/clear", function() {
    waitlist = [];
    reservations = [];
  });

};

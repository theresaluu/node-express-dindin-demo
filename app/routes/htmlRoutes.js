var path = require("path");

module.exports = function(app) {
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/reserve.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });
};

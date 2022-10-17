const express = require("express");
const { path } = require("express/lib/application");

const app = express();

app.get("/", function (request, response) {
  response.send("Hi");
});

app.get("/about", function(req, res) {
  res.send("Hi I'm Abdurrezzak");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

const express = require("express");
const { path } = require("express/lib/application");

const app = express();

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

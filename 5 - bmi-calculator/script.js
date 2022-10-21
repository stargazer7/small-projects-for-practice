const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/* throw index.html when requested */
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

/* run server */
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.use("/assets", express.static(__dirname + "/assets"));

app.post("/", function (req, res) {
  

  let userWeight = parseFloat(req.body.weight);
  let userHeight = parseFloat(req.body.height);

  let result = userWeight / (userHeight * userHeight);

  

  res.send({result});
});

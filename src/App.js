const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./models");
const config = require("./config/config");
let fixturesLoader = require(__dirname + "/fixtures/EmployeesFixtures.js");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

// const fixtures = require("./fixtures/EmployeesData");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "client/dist", "index.html"));
  });
}

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`server started on port ${config.port}`);
  fixturesLoader.loadFixtures();
});

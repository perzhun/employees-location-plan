const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./src/models");
const config = require("./src/config/config");
let fixturesLoader = require(__dirname + "/src/fixtures/EmployeesFixtures.js");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./src/routes")(app);

// const fixtures = require("./fixtures/EmployeesData");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/client/dist", "index.html"));
  });
}

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`server started on port ${config.port}`);
  fixturesLoader.loadFixtures();
});

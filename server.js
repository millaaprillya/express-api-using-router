const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
var models = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use("/api", routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// Sync Database
models.sequelize
  .sync()
  .then(function () {
    console.log("Nice! Database looks fine");
  })
  .catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

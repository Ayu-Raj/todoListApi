const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel"), //created model loading here
  bodyParser = require("body-parser");
const apis = require("./api/routes/todoListRoutes");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/Tododb", { useNewUrlParser: true })
  .then(() => console.log("Mongdb connected"))
  .catch((err) => console.log("Error"));
mongoose.set("useUnifiedTopology", true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", apis);
app.listen(port);

console.log("todo list RESTful API server started on: " + port);

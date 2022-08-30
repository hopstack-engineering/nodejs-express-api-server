const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

//cors
const corsOptions = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose.Promise = global.Promise;

//Mongo (connect)
mongoose
  .connect("mongodb://localhost/exampleDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log("Connection error");
  });

require("./routes/generic.route.js")(app);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server started on port ${port}`));

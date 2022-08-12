const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routers");
require("dotenv").config();

const port = process.env.PORT || 3000;
const connectDatabase = require("./config/database");
connectDatabase();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// middleware cors
app.use(cors());

// Router
route(app);

/**
 * Lestiening server
 */
app.listen(port, () => {
  console.log("listening on port http://localhost:" + port);
});

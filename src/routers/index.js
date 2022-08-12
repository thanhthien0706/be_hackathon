const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    mess: "THien ne",
  });
});

function route(app) {
  app.use("/api/v1", router);
}

module.exports = route;

const weather = require("./weather");

const express = require("express");
const router = express.Router();

router.use("/mars", weather);

router.get("/", (req, res) => {
  const resObj = {
    message: "A suhhh",
  };
  res.status(400).send(resObj);
});

module.exports = router;
const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Hello World! test");
});
router.get("/test2", (req, res) => {
  //controller: business logic here
  res.send("Second test");
});

router.get("/", (req, res) => {
  res.send("Hello World!");
});
module.exports = router;

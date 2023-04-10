const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Dingus",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Pingus",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Odin Message Board", messages });
});

module.exports = router;

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

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;

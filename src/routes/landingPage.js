const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("Hello World!");
});

router.route("/ejs").get((req, res) => {
  res.render("index", { title: "DDCA Project" });
  res.end();
});

module.exports = router;

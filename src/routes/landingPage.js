const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("Hello World!");
});

router.route("/ejs").get((req, res) => {
  res.render("index", { title: "yooo huuu" });
  res.end();
});

module.exports = router;

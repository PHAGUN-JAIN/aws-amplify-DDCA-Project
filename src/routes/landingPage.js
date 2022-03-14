const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("Hello World!");
});

router.route("/ejs").get(async (req, res) => {
  await res.render("index.ejs", { title: "DDCA Project" });
  // res.end();
});

module.exports = router;

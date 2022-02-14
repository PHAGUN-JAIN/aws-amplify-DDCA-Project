const router = require("express").Router();
const landingPageRouter = require("./landingPage");

router.use("/home", landingPageRouter);
// router.route("/").get((req, res) => {});

module.exports =  router ;

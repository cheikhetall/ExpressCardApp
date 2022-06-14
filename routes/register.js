var express = require("express");

var router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "register" });
});
router.post("/", async (req, res) => {
  const email = await Users.find({ email: req.body.email });
  if (email[0] == null) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      console.log(user);
      user
        .save()
        .then(() => console.log("worked"))
        .catch((err) => console.log(err));
      res.redirect("/login");
    } catch {
      res.redirect("/register");
    }
  } else {
    console.log(email);
    res.send("choose different email");
  }
});

module.exports = router;

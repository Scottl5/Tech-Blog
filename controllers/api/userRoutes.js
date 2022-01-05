const router = require("express").Router();
const { Users, Posts, Comments } = require("../../models/index");

router.post("/", async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    req.session.save(() => {
      req.session.user_name = userData.dataValues.user_name;
      req.session.logged_in = true;
      req.session.user_id = userData.dataValues.id;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({
          message:
            "Incorrect email or password has been entered, please try again",
        });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "Successfully logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

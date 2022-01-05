const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentsData = await Comment.findAll({});
    return res.status(200(commentsData));
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    try {
      const commentsData = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      return res.status(200).json(commentsData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
});

router.delete("/:id", withAuth, (req, res) => {
  try {
    const commentsData = await Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

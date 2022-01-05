const router = require("express").Router;
const { Posts } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const postData = await Posts.create({
      title: req.body.title,
      content: req.body.content,
      user_id: res.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update", withAuth, async (req, res) => {
  try {
    const postData = await Posts.update(
      { title: req.boty.title, content: req.body.content },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/delete:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id." });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

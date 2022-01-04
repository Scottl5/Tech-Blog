const { Comments } = require("../models");

const commentsData = [
  {
    comment: "This is an example of a comment",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;

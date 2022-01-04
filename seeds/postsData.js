const { Posts } = require("../models");
const seedComments = require("./commentsData");

const postsData = [
  {
    title: "First Post Test",
    description: "This is a description for the first post",
    user_id: 1,
  },
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;

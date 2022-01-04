const { Users } = require("../models");

const userData = [
  {
    username: "scott",
    password: "pass12345",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;

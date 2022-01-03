const Comments = require("./Comments");
const Posts = require("./Posts");
const Users = require("./Users");

Posts.hasMany(Comments, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Posts, {
  foreignKey: "post_id",
});

Users.hasMany(Comments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Posts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

module.exports = { Comments, Posts, Users };

const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("foundit", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

let db = {};

// Import models
db.User = require("./user.model")(connection, DataTypes);
db.Post = require("./post.model")(connection, DataTypes);
db.Comment = require("./comment.model")(connection, DataTypes);

// Relations between models
// User & Post
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
// User & Comment
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
// Post & Comment
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);


// connection.sync({ alter: true }).then(() => {
//   console.log("tables created successfully");
// }).catch((error) => {
//   console.error("tables failed to be created, error:", error);
// });

module.exports = db;

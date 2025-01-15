const express = require("express");
const { getAllPosts, getOnePost, addOnePost, deleteOnePost, updateOnePost } = require("../controllers/post.controller");
const verifyToken = require("../middleware/auth");
const Router = express.Router();

Router.get("/getAll", getAllPosts);
Router.get("/get/:postId", getOnePost);
Router.post("/add", verifyToken, addOnePost);
Router.delete("/delete/:postId", deleteOnePost);
Router.put("/update/:postId", updateOnePost);

module.exports = Router;

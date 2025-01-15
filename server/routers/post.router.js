const express = require("express");
const { getAllPosts, getOnePost, addOnePost, deleteOnePost, updateOnePost } = require("../controllers/post.controller");
const Router = express.Router();

Router.get("/getAll", getAllPosts);
Router.get("/get/:postId", getOnePost);
Router.post("/add", addOnePost);
Router.delete("/delete/:postId", deleteOnePost);
Router.put("/update/:postId", updateOnePost);

module.exports = Router;

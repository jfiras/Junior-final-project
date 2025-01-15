const express = require("express");
const { getAllComments, getOneComment, addOneComment, deleteOneComment, updateOneComment } = require("../controllers/comment.controller");
const verifyToken = require("../middleware/auth");
const Router = express.Router();

Router.get("/getAll", getAllComments);
Router.get("/get/:commentId", getOneComment);
Router.post("/add", verifyToken, addOneComment);
Router.delete("/delete/:commentId", deleteOneComment);
Router.put("/update/:commentId", updateOneComment);

module.exports = Router;

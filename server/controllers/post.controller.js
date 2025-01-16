const db = require("../models/index");
const Posts = db.Post;
const Comments = db.Comment;
const Users = db.User;

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Posts.findAll({ include: [{ model: Users }, { model: Comments, include: { model: Users } }] });
      res.send({ message: "success to get all posts", data: posts });
    }
    catch (err) {
      console.error({ messageError: "unable to get all posts", error: err });
    }
  },
  getAllPostsByUser: async (req, res) => {
    try {
      const posts = await Posts.findAll({ include: [{ model: Users }, { model: Comments, include: { model: Users } }] });
      const postsByUser = posts.filter((post) => post.userId === req.user);
      res.send({ message: "success to get all posts by user", data: postsByUser });
    }
    catch (err) {
      console.error({ messageError: "unable to get all posts by user", error: err });
    }
  },
  getOnePost: async (req, res) => {
    try {
      const post = await Posts.findByPk(req.params.postId);
      res.send({ message: "success to get one post", data: post });
    }
    catch (err) {
      console.error({ messageError: "unable to get one post", error: err });
    }
  },
  addOnePost: async (req, res) => {
    try {
      // console.log("id inside add one post from verify token", req.user);
      const { title, body, category } = req.body;
      const post = await Posts.create({
        title: title,
        body: body,
        category: category,
        userId: req.user,
      });
      res.status(201).send({ message: "success to add one post", data: post });
    }
    catch (err) {
      console.error({ messageError: "unable to add one post", error: err });
    }
  },
  deleteOnePost: async (req, res) => {
    try {
      await Posts.destroy({ where: { id: req.params.postId } });
      res.send({ message: "success to delete one post" });
    }
    catch (err) {
      console.error({ messageError: "unable to delete one post", error: err });
    }
  },
  updateOnePost: async (req, res) => {
    try {
      await Posts.update(req.body, { where: { id: req.params.postId } });
      res.send({ message: "success to update one post" });
    }
    catch (err) {
      console.error({ messageError: "unable to update one post", error: err });
    }
  },
};

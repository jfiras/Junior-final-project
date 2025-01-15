const db = require("../models/index");
const Comments = db.Comment;
const Users = db.User;

module.exports = {
    getAllComments: async (req, res) => {
        try {
            const comments = await Comments.findAll({ include: Users });
            res.send({ message: "success to get all comments", data: comments });
        }
        catch (err) {
            console.error({ messageError: "unable to get all comments", error: err });
        }
    },
    getOneComment: async (req, res) => {
        try {
            const comment = await Comments.findByPk(req.params.commentId);
            res.send({ message: "success to get one comment", data: comment });
        }
        catch (err) {
            console.error({ messageError: "unable to get one comment", error: err });
        }
    },
    addOneComment: async (req, res) => {
        try {
            const { body, postId } = req.body;
            const comment = await Comments.create({ body: body, userId: req.user, postId: postId });
            res.status(201).send({ message: "success to add one comment", data: comment });
        }
        catch (err) {
            console.error({ messageError: "unable to add one comment", error: err });
        }
    },
    deleteOneComment: async (req, res) => {
        try {
            await Comments.destroy({ where: { id: req.params.commentId } });
            res.send({ message: "success to delete one comment" });
        }
        catch (err) {
            console.error({ messageError: "unable to delete one comment", error: err });
        }
    },
    updateOneComment: async (req, res) => {
        try {
            await Comments.update(req.body, { where: { id: req.params.commentId } });
            res.send({ message: "success to update one comment" });
        }
        catch (err) {
            console.error({ messageError: "unable to update one comment", error: err });
        }
    },
};

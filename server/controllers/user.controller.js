const db = require("../models/index");
const Users = db.User;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await Users.findAll();
            res.send({ message: "success to get all users", data: users });
        }
        catch (err) {
            console.error({ messageError: "unable to get all users", error: err });
        }
    },
    getOneUser: async (req, res) => {
        try {
            const user = await Users.findByPk(req.params.userId);
            res.send({ message: "success to get one user", data: user });
        }
        catch (err) {
            console.error({ messageError: "unable to get one user", error: err });
        }
    },
    addOneUser: async (req, res) => {
        try {
            const user = await Users.create(req.body);
            res.send({ message: "success to add one user", data: user });
        }
        catch (err) {
            console.error({ messageError: "unable to add one user", error: err });
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            await Users.destroy({ where: { id: req.params.userId } });
            res.send({ message: "success to delete one user" });
        }
        catch (err) {
            console.error({ messageError: "unable to delete one user", error: err });
        }
    },
    updateOneUser: async (req, res) => {
        try {
            await Users.update(req.body, { where: { id: req.params.userId } });
            res.send({ message: "success to update one user" });
        }
        catch (err) {
            console.error({ messageError: "unable to update one user", error: err });
        }
    },

    // Auth Methods
    register: async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const existingEmail = await Users.findOne({ where: { email } });
            const existingUsername = await Users.findOne({ where: { username } });
            if (existingEmail || existingUsername) {
                return res.status(400).send({ message: "User already exists" });
            }
            const hashedPassword = await bcrypt.hash(password, 8);
            const newUser = await Users.create({
                email: email,
                password: hashedPassword,
                username: username,
            });
            return res
                .status(201)
                .send({ message: "register success", data: newUser });
        } catch (error) {
            console.error({ messageError: "unable to register user", error: err });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Users.findOne({ where: { username } });
            if (!user) {
                return res
                    .status(404)
                    .send({ message: "username or password is incorrect" });
            }
            const comparedPassword = await bcrypt.compare(password, user.password);
            if (!comparedPassword) {
                return res
                    .status(401)
                    .send({ message: "username or password is incorrect" });
            }
            const token = jwt.sign({ id: user.id }, "1234", { expiresIn: "24h" });
            return res.status(201).send({ message: "Login success", data: user, token: token });
        } catch (error) {
            console.error({ messageError: "unable to login user", error: err });
        }
    },
    currentUser: async (req, res) => {
        try {
            console.log(req.user)
            const user = await Users.findAll({ where: { id: req.user } });
            res.send(user[0]);
        } catch (error) {
            console.error({ messageError: "unable to get current user", error: error });
        }
    },
};

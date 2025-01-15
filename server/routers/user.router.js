const express = require("express");
const { getAllUsers, getOneUser, addOneUser, deleteOneUser, updateOneUser, login, register, currentUser } = require("../controllers/user.controller");
const verifyToken = require("../middleware/auth");
const Router = express.Router();


Router.get("/getAll", getAllUsers);
Router.get("/get/:userId", getOneUser);
Router.post("/add", addOneUser);
Router.delete("/delete/:userId", deleteOneUser);
Router.put("/update/:userId", updateOneUser);

// Auth Routers
Router.post("/login", login);
Router.post("/register", register);
Router.get("/getUser", verifyToken, currentUser);

module.exports = Router;

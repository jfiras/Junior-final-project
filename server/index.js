const express = require("express");
const app = express();
const db = require("./models/index");
const port = 5000;
const cors = require("cors");
const usersRouter = require("./routers/user.router");
const postsRouter = require("./routers/post.router");
const commentsRouter = require("./routers/comment.router");

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

app.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});

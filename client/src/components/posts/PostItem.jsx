import React, { useState } from "react";
import CommentItem from "../comments/CommentItem.jsx";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const PostItem = ({ post, handleAddComment }) => {
  const [body, setBody] = useState("");

  return (
    <div className="container my-5">
      <div className="p-5 bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">{post.title}</h1>

        <div className="mb-1 text-body-secondary">
          {post.user.username},{" "}
          {moment(post.createdAt).startOf("hour").fromNow()}
          {post.createdAt === post.updatedAt ? "" : <p> (edited)</p>}
        </div>
        <div className="mb-1 text-body-secondary">
          {post.category === "Both Sides" ? (
            <span class="badge rounded-pill text-bg-info">Both Sides</span>
          ) : null}
          {post.category === "Front Side" ? (
            <span className="badge rounded-pill text-bg-primary">
              Front Side
            </span>
          ) : null}
          {post.category === "Back Side" ? (
            <span class="badge rounded-pill text-bg-warning">Back Side</span>
          ) : null}
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <p className="mb-auto">{parse(post.body)}</p>
          <img
            src={post.imgUrl}
            class="card-img-top"
            alt="image of the post"
          ></img>
        </div>
        <div>Comments:</div>
        <ul className="list-group list-group-flush">
          {post.comments.map((comment) => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                commentOwner={comment.user.username}
              />
            );
          })}
          <li className="list-group-item">
            <div className="mb-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddComment({ body: body, postId: post.id });
                }}
              >
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Add a comment..."
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-primary" type="submit">
                    Send Comment
                  </button>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostItem;

import React, { useState } from "react";
import CommentItem from "../comments/CommentItem.jsx";
import moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import parse from "html-react-parser";

const PostItem = ({
  post,
  handleAddComment,
  handleDeletePost,
  handleUpdatePost,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // For Update
  let idModalUpdateSource = "#" + post.id + "update";
  let idModalUpdateTarget = "" + post.id + "update";

  // For Delete
  let idModalDeleteSource = "#" + post.id + "delete";
  let idModalDeleteTarget = "" + post.id + "delete";

  return (
    <div className="container my-5">
      <div className="p-5 bg-body-tertiary rounded-3">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary rounded-pill px-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={idModalUpdateSource}
          >
            Update
          </button>
          <button
            className="btn btn-danger rounded-pill px-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={idModalDeleteSource}
          >
            Delete
          </button>
        </div>
        <h1 className="text-body-emphasis">{post.title}</h1>

        <div className="mb-1 text-body-secondary">
          {post.user.username},{" "}
          {moment(post.createdAt).startOf("hour").fromNow()}
          {post.createdAt === post.updatedAt ? "" : <p>(edited)</p>}
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <p className="mb-auto">{parse(post.body)}</p>
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
                  handleAddComment({ body: body, userId: 1, postId: post.id });
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

      {/* Modal DELETE */}
      <div
        className="modal fade"
        id={idModalDeleteTarget}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ color: "red" }}
              >
                Confirm Removing Your Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to remove permanently your post? This
                action cannot be undone!
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeletePost(post.id);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
                    icon: "success",
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal UPDATE */}
      <div
        className="modal fade"
        id={idModalUpdateTarget}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Your Post:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdatePost(post.id, {
                    title: title || post.title,
                    body: body || post.body,
                    imgUrl: imgUrl || post.imgUrl,
                  });
                  Swal.fire({
                    title: "Updated!",
                    text: "Your post has been updated.",
                    icon: "success",
                  });
                }}
              >
                <div className="mb-3">
                  <label htmlFor="titleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    placeholder="Add your title here..."
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contentTextarea" className="form-label">
                    Content
                  </label>
                  <ReactQuill
                    theme="snow"
                    className="form-control"
                    id="contentTextarea"
                    placeholder="Add your content here..."
                    value={body}
                    onChange={setBody}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputFile" className="form-label">
                    Upload a new image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputFile"
                    aria-describedby="inputFile"
                    aria-label="Upload"
                    // onChange={(e)=> setImgUrl(e.target.value)}
                  ></input>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

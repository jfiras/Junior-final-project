import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

const AddPost = ({ handleAddPost, changeView }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost({
      title: title,
      body: body,
      category: category,
      imgUrl: imgUrl,
    });
    Swal.fire({
      title: "Good job!",
      text: "Your post is published 📨",
      icon: "success",
    });
  };

  return (
    <div className="container my-5">
      <div className="p-5 bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Add your own post:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
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
            <label htmlFor="categorySelect" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="categorySelect"
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Both Sides" selected>
                Both Sides
              </option>
              <option value="Front Side">Front side</option>
              <option value="Back Side">Back Side</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputFile" className="form-label">
              Upload an image
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

          <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => changeView("PostsList")}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;

import React from "react";
import PostItem from "./PostItem.jsx";

const PostsList = ({
  posts,
  handleAddComment,
  handleDeletePost,
  handleUpdatePost,
  handleSearchPosts,
}) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        <h4>
          <center>Welcome home — check it out 📋</center>
        </h4>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => {
              handleSearchPosts(e.target.value);
            }}
          />
        </form>
      </div>
      {posts.map((post, index) => {
        return (
          <PostItem
            key={index}
            post={post}
            handleAddComment={handleAddComment}
            handleDeletePost={handleDeletePost}
            handleUpdatePost={handleUpdatePost}
          />
        );
      })}
    </div>
  );
};

export default PostsList;

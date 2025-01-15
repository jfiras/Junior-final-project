import React from "react";
import PostItem from "./PostItem.jsx";

const PostsList = ({
  posts,
  handleAddComment,
  handleDeletePost,
  handleUpdatePost,
}) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        <h4>
          <center>Welcome home — Try to help others — check it out 📋</center>
        </h4>
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

import React from "react";
import UserPostItem from "./UserPostItem.jsx";

const UserPostsList = ({
  userPosts,
  handleAddComment,
  handleDeletePost,
  handleUpdatePost,
  handleSearchPosts,
  handleFilterPostsByCategories,
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
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              handleFilterPostsByCategories(e.target.value);
            }}
          >
            <option selected value="none">
              Filter By Category
            </option>
            <option value="Both Sides">Both Sides</option>
            <option value="Front Side">Front Side</option>
            <option value="Back Side">Back Side</option>
          </select>
        </form>
      </div>
      {userPosts.map((post, index) => {
        return (
          <UserPostItem
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

export default UserPostsList;

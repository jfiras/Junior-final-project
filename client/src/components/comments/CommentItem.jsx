import React from "react";

const CommentItem = ({ comment, commentOwner }) => {
  return (
    <div>
      <li className="list-group-item">
        {commentOwner}: {comment.body}
      </li>
    </div>
  );
};

export default CommentItem;

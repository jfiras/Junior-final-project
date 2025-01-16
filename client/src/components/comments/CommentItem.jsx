import React from "react";
import parse from "html-react-parser";

const CommentItem = ({ comment, commentOwner }) => {
  return (
    <div>
      <li className="list-group-item">
        <span style={{ color: "DarkCyan" }}>{commentOwner}:</span>{" "}
        {parse(comment.body)}
      </li>
    </div>
  );
};

export default CommentItem;

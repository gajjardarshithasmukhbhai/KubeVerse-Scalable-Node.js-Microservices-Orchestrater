import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>{comments?.map(commentsValue => (
      <li key={commentsValue.id}>{commentsValue.content}</li>))}
    </ul>
  );
};

export default CommentList;

import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments, onEditClick, deleteComment }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onEditClick={onEditClick}
          deleteComment={deleteComment}
        />
      ))}
    </>
  );
};

export default CommentList;
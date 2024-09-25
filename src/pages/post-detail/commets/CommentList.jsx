import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({
  loggedInUserId,
  comments,
  onEditClick,
  deleteComment
}) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          loggedInUserId={loggedInUserId}
          comment={comment}
          onEditClick={onEditClick}
          deleteComment={deleteComment}
        />
      ))}
    </>
  );
};

export default CommentList;
import React from 'react';
import styles from './CommentItem.module.scss';
import { Icon } from '../../../components/core';

const CommentItem = ({ comment, onEditClick, deleteComment }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteComment(comment.commentId);
    console.log('댓글삭제');
  }

  return (
    <div className={styles.commentItem}>
      <div className={styles.userProfile}>
        {comment.profilePicture ? (
          <div className={styles.profilePicture}>
            <img
              src={comment.profilePicture}
              alt={comment.nickname}
            />
          </div>
        ) : (
          <Icon type={'IconUserCircle'} className={styles.iconUserCircle} />
        )}
      </div>
      <div className={styles.commentItemContent}>
        <div className={styles.commentItemHeader}>
          <div className={styles.nickname}>{comment.nickname}</div>
          <div className={styles.iconWrap}>
            <div onClick={() => onEditClick(comment.commentId, comment.text)}>
              <Icon
                type={'IconEdit'}
                className={styles.icon}
              />
            </div>
            <div onClick={handleDeleteClick}>
              <Icon
                type={'IconDelete'}
                className={styles.icon}
              />
            </div>
            <div>
              <Icon
                type={'IconChat'}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
        <div className={styles.commentText}>
          {comment.text}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
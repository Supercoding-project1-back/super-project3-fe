import React from 'react';
import styles from './CommentItem.module.scss';
import { Icon } from '../../../components/core';

const CommentItem = ({ comment, onEditClick, deleteComment }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteComment(comment.id);
    console.log('댓글삭제');
  }

  return (
    <div className={styles.commentItem}>
      <div>
        <Icon type={'IconUserCircle'} />
      </div>
      <div className={styles.commentItemContent}>
        <div className={styles.commentItemHeader}>
          <div className={styles.nickname}>{comment.author}</div>
          <div className={styles.iconWrap}>
            <div onClick={() => onEditClick(comment.id, comment.text)}>
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
import React from 'react';
import styles from './CommentItem.module.scss';
import { IconField } from '../../../components/core/icon-field';

const CommentItem = ({ comment, onEditClick, deleteComment }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteComment(comment.id);
    console.log('댓글삭제');
  }

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentItemIcon}>
        <IconField
          type={'iconUserCircle'}
          className={`${styles.iconUserCircle}`}
        />
      </div>
      <div className={styles.commentItemContent}>
        <div className={styles.commentItemHeader}>
          <div className={styles.nickname}>{comment.author}</div>
          <div className={styles.iconWrap}>
            <div onClick={() => onEditClick(comment.id, comment.text)}>
              <IconField
                type={'iconEdit'}
                className={`${styles.icon} ${styles.iconEdit}`}
              />
            </div>
            <div onClick={handleDeleteClick}>
              <IconField
                type={'iconDelete'}
                className={`${styles.icon} ${styles.iconEdit}`}
              />
            </div>
            <div>
              <IconField
                type={'iconChat'}
                className={`${styles.icon} ${styles.iconChat}`}
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
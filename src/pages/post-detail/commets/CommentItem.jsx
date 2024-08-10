import React from 'react';
import styles from './CommentItem.module.scss';
import IconField from '../../../components/core/icon-field/IconField';

const CommentItem = () => {
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
          <div className={styles.nickname}>에어컨없인못살아</div>
          <IconField
            type={'iconMore'}
            className={`${styles.iconMore}`}
          />
        </div>
        <div className={styles.commentText}>
          댓글입니다~
          댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~댓글입니다~
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
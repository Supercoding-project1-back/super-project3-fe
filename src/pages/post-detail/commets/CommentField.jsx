import React from 'react';
import styles from './CommentField.module.scss';
import CommentList from './CommentList';

const CommentField = () => {
  return (
    <div className={styles.wrap}>
      <div>
        댓글
        <span>0</span>
      </div>

      <CommentList />
    </div>
  );
};

export default CommentField;
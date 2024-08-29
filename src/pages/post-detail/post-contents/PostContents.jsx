import React from 'react';
import styles from './PostContents.module.scss';

const PostContents = ({ content }) => {
  return (
    <div className={styles.contents}>
      {content}
    </div>
  );
};

export default PostContents;
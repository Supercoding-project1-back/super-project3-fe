import React from 'react';
import styles from './PostTtile.module.scss';

const PostTitle = ({ title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
};

export default PostTitle;
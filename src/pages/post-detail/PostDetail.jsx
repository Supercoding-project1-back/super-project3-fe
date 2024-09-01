import React from 'react';
import styles from './PostDetail.module.scss';
import { CommentField } from './commets';
import {
  PostCategory,
  PostTitle,
  PostInfo,
  PostContents,
  PostVote,
  PostMap
} from './';

const PostDetail = () => {
  return (
    <>
      <section className={styles.wrap}>
        <PostCategory />
      </section>

      <section className={styles.wrap}>
        <PostTitle />
      </section>

      {/* 게시글 : 게시글정보 */}
      <section className={`${styles.wrap} ${styles.postInfo}`}>
        <PostInfo />
      </section>

      <section className={styles.wrap}>
        <PostContents />
      </section>

      <section className={styles.wrap}>
        <PostVote />
      </section>

      <section className={styles.wrap}>
        <PostMap />
      </section>

      {/* 댓글 영역 */}
      <CommentField />
    </>
  );
};

export default PostDetail;
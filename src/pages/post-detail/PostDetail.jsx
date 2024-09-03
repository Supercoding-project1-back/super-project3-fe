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
import ImgViewField from '../../components/core/img-view-field/ImgViewField';

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
        <ImgViewField src="https://cafe24img.poxo.com/dinotaeng/web/product/small/202205/b7bb570a94d0732787fc2110ec4bbe6c.png"
          alt="Example Image"
          className={styles.img}
          onErrorSrc="https://example.com/fallback-image.svg" />
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
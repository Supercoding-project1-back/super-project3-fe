import React, { useState } from 'react';
import styles from './WritePost.module.scss';
import { WriteCategory, WriteTitle, WriteContents, WriteVote } from './';
import { Icon } from '../../components/core';
import useModal from '../../hooks/useModal';


const WritePost = () => {
  const { Modal, openModalHandler, closeModalHandler } = useModal(null);

  return (
    <>
      <section className={styles.wrap}>
        <WriteCategory
        />
      </section>

      <section className={styles.wrap}>
        <WriteTitle />
      </section>

      <section className={styles.wrap}>
        <WriteContents />
      </section>

      <Modal variant="fullscreenModal" customClass={styles.voteModal}>
        <WriteVote />
      </Modal>

      <section className={`${styles.wrap} ${styles.buttonsWrap}`}>
        <ul>
          <li>
            <Icon type={'iconImage'} className={styles.icon} />
            <span>사진</span>
          </li>
          <li>
            <Icon type={'iconLocation'} className={styles.icon} />
            <span>위치</span>
          </li>
          <li onClick={openModalHandler}>
            <Icon type={'iconVote'} className={styles.icon} />
            <span>투표</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default WritePost;
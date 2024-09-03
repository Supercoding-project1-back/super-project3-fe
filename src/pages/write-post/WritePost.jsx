import React, { useContext } from 'react';
import styles from './WritePost.module.scss';
import {
  WriteCategory,
  WriteTitle,
  WriteContents,
  WriteVote
} from './';
import { Icon, Vote } from '../../components/core';
import useModal from '../../hooks/useModal';
import { PostFormContext } from '../../contexts/PostFormContext';


const WritePost = () => {
  const { voteItems } = useContext(PostFormContext);
  const { Modal, openModalHandler } = useModal(null);

  return (
    <>
      <section className={styles.wrap}>
        <WriteCategory />
      </section>

      <section className={styles.wrap}>
        <WriteTitle />
      </section>

      <section className={styles.wrap}>
        <WriteContents />
      </section>

      <section>
        <Vote itmes={voteItems} isReadOnly={true} />
      </section>


      <section className={`${styles.wrap} ${styles.buttonsWrap}`}>
        <ul>
          <li>
            <Icon type={'IconImage'} className={styles.icon} />
            <span>사진</span>
          </li>
          <li>
            <Icon type={'IconLocation'} className={styles.icon} />
            <span>위치</span>
          </li>
          <li onClick={openModalHandler}>
            <Icon type={'IconVote'} className={styles.icon} />
            <span>투표</span>
          </li>
        </ul>
      </section>


      {/* 투표버튼 클릭 시, 투표 모달 창 생성 */}
      <Modal variant="fullscreenModal" customClass={styles.voteModal}>
        <WriteVote />
      </Modal>

    </>
  );
};

export default WritePost;
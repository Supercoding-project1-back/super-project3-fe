import React, { useContext, useEffect, useState } from 'react';
import styles from './WritePost.module.scss';
import {
  WriteCategory,
  WriteTitle,
  WriteContents,
  WriteVote
} from './';
import { Icon, ImgPreview, ImgUpload, Vote } from '../../components/core';
import useModal from '../../hooks/useModal';
import { PostFormContext } from '../../contexts/PostFormContext';
import { getPostById } from '../../api/postDetailApi';
import { useParams } from 'react-router';


const WritePost = () => {
  const { id } = useParams();

  const {
    setIsEdit,
    setCategory,
    setTitle,
    setContent,
    setVoteItems,
    uploadWriteVote,
    removeVoteToPost,
    imagePreviews,
    addImage,
    removeImage
  } = useContext(PostFormContext);
  const { Modal, openModalHandler } = useModal(null);

  useEffect(() => {
    if (id) {  // ID가 있을 경우 수정 모드
      setIsEdit(true);
      // 기존 글 데이터 가져오기
      const fetchPostData = async (id) => {
        try {
          const post = await getPostById(id);
          setCategory(post.category);
          setTitle(post.title);
          setContent(post.content);
          setVoteItems(post.voteRequest || []);
        } catch (error) {
          console.error(`게시글 데이터를 불러오는 중 오류 발생: ${error}`);
        }
      };
      fetchPostData(id);
    }

  }, [id, setCategory, setTitle, setContent, setVoteItems]);


  return (
    <div className={styles.container}>
      <section className={styles.wrap}>
        <WriteCategory />
      </section>

      <section className={styles.wrap}>
        <WriteTitle />
      </section>

      <section className={styles.wrap}>
        <WriteContents />
      </section>

      {uploadWriteVote.length > 0 ? (
        <section className={styles.wrap}>
          <Vote items={uploadWriteVote} isReadOnly={true} onRemove={removeVoteToPost} />
        </section>
      ) : null}



      {imagePreviews.length > 0 && (
        <section className={styles.imagePreview}>
          <ImgPreview imagePreviews={imagePreviews} onRemove={removeImage} />
        </section>
      )}


      <section className={`${styles.wrap} ${styles.buttonsWrap}`}>
        <ul>
          <li>
            <ImgUpload onChange={addImage} />
          </li>
          <li>
            <div>
              <Icon type={'IconLocation'} className={styles.icon} />
              <span>위치</span>
            </div>
          </li>
          <li onClick={openModalHandler}>
            <div>
              <Icon type={'IconVote'} className={styles.icon} />
              <span>투표</span>
            </div>
          </li>
        </ul>
      </section>


      {/* 투표버튼 클릭 시, 투표 모달 창 생성 */}
      <Modal variant="fullscreenModal" customClass={styles.voteModal}>
        <WriteVote />
      </Modal>

    </div>
  );
};

export default WritePost;
import React, { useState } from 'react';
import styles from './WritePost.module.scss';
import { WriteCategory, WriteTitle, WriteContents } from './';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/core';

const WritePost = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChangeCatergory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <section className={styles.wrap}>
        <WriteCategory
          handleChangeCatergory={handleChangeCatergory}
        />
      </section>

      <section className={styles.wrap}>
        <WriteTitle />
      </section>

      <section className={styles.wrap}>
        <WriteContents />
      </section>

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
          <li>
            <Icon type={'iconVote'} className={styles.icon} />
            <span>투표</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default WritePost;
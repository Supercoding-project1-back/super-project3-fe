import React from 'react';
import styles from './PostMap.module.scss';

const PostMap = () => {
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapContainer}>지도보이는 부분</div>
      <div className={styles.locationText}>
        <span className={styles.locationTitle}>광화문역 2번출구</span>
        <span className={styles.locationAdress}>서울특별시 종로구 세종로</span>
      </div>
    </div>
  );
};

export default PostMap;
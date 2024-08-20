import React from 'react';
import styles from './PostInfo.module.scss';
import { Icon } from '../../../components/core';

const PostInfo = () => {
  return (
    <>
      <Icon
        type={'IconUserCircle'}
        className={styles.iconUserCircle}
      />
      <div>
        <div className={styles.nickname}>에어컨없인못살아</div>
        <div className={styles.details}>
          <div className={styles.detailInfos}>
            <Icon
              type={'IconTime'}
              className={styles.iconTime}
            />
            <span>6분전</span>
          </div>
          <div className={styles.detailInfos}>
            <Icon
              type={'IconViews'}
              className={styles.iconViews}
            />
            <span>10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
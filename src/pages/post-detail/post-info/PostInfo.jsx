import React from 'react';
import styles from './PostInfo.module.scss';
import { Icon } from '../../../components/core';

const PostInfo = () => {
  return (
    <>
      <Icon
        type={'iconUserCircle'}
        className={`${styles.iconUserCircle}`}
      />
      <div>
        <div className={styles.nickname}>에어컨없인못살아</div>
        <div className={styles.details}>
          <div className={`${styles.detailInfos} timeInfo`}>
            <Icon
              type={'iconTime'}
              className={styles.iconTime}
            />
            <span>6분전</span>
          </div>
          <div className={`${styles.detailInfos} viewsInfo`}>
            <Icon
              type={'iconViews'}
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
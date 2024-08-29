import React from 'react';
import styles from './PostInfo.module.scss';
import { Icon } from '../../../components/core';

const PostInfo = ({ email, createAt, views }) => {
  return (
    <>
      <Icon
        type={'IconUserCircle'}
        className={styles.iconUserCircle}
      />
      <div>
        <div className={styles.nickname}>{email}</div>
        <div className={styles.details}>
          <div className={styles.detailInfos}>
            <Icon
              type={'IconTime'}
              className={styles.iconTime}
            />
            <span>{createAt}</span>
          </div>
          <div className={styles.detailInfos}>
            <Icon
              type={'IconViews'}
              className={styles.iconViews}
            />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
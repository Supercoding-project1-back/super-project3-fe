import React from 'react';
import styles from './WriteContents.module.scss';
import { TextareaField } from '../../../components/core';

const WriteContents = () => {
  return (
    <div className={styles.contentsWrap}>
      <TextareaField
        className={styles.contents}
        name={'text'}
        placeholder={'내용을 입력해주세요'}
        submitOnEnter={false}
      />
    </div>
  );
};

export default WriteContents;
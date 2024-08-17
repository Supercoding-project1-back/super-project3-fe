import React, { useState } from 'react';
import styles from './WriteTtile.module.scss';
import { InputTextField } from '../../../components/core';

const WriteTitle = () => {
  const [title, setTitle] = useState('');

  return (
    <div className={styles.titleWrap}>
      <InputTextField
        className={styles.title}
        name={title}
        value={title}
        placeholder='제목을 입력하세요'
        rows={3}
      />
    </div>
  );
};

export default WriteTitle;
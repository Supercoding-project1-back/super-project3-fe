import React, { useContext } from 'react';
import styles from './WriteTtile.module.scss';
import { InputTextField } from '../../../components/core';
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteTitle = () => {
  const { title, setTitle } = useContext(PostFormContext);

  const handleTitleChange = (name, value) => {
    if (name === title) {
      setTitle(value);
    }
  };

  return (
    <div className={styles.titleWrap}>
      <InputTextField
        className={styles.title}
        name={title}
        value={title}
        placeholder='제목을 입력하세요'
        rows={3}
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default WriteTitle;
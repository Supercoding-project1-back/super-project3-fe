import React, { useContext } from 'react';
import styles from './WriteContents.module.scss';
import { TextareaField } from '../../../components/core';
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteContents = () => {
  const { content, setContent } = useContext(PostFormContext);

  const handleContentChange = (name, value) => {
    if (name === content) {
      setContent(value);
    }
  };

  return (
    <div className={styles.contentsWrap}>
      <TextareaField
        className={styles.contents}
        name={content}
        value={content}
        placeholder={'내용을 입력해주세요'}
        submitOnEnter={false}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default WriteContents;
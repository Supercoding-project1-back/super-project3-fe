import React, { useContext } from 'react';
import styles from './WriteContents.module.scss';
import { TextareaField } from '../../../components/core';
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteContents = () => {
  const { contents, setContents } = useContext(PostFormContext);

  const handleContentsChange = (name, value) => {
    if (name === contents) {
      setContents(value);
    }
  };

  return (
    <div className={styles.contentsWrap}>
      <TextareaField
        className={styles.contents}
        name={contents}
        value={contents}
        placeholder={'내용을 입력해주세요'}
        submitOnEnter={false}
        onChange={handleContentsChange}
      />
    </div>
  );
};

export default WriteContents;
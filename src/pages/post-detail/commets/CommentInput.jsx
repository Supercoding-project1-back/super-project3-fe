import React, { useEffect, useState } from 'react';
import styles from './CommentInput.module.scss';
import { Icon, TextareaField } from '../../../components/core';

const CommentInput = ({ addComment, editComment, initialText }) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleChangeInput = (name, value) => {
    setText(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmitComment();
    }
  }

  const handleSubmitComment = () => {
    if (text.trim()) {
      if (editComment) {
        editComment(text);
      } else {
        addComment(text);
      }
      setText('');
    }
  };

  return (
    <div className={styles.commnetInputWrap}>
      <div className={styles.inputWrap}>
        {/* <InputTextField
          name="comment"
          value={text}
          placeholder={'댓글을 입력해주세요'}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
        /> */}

        <TextareaField
          name="comment"
          value={text}
          placeholder={'댓글을 입력해주세요'}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className={styles.iconWrap}
        onClick={handleSubmitComment}
      >
        <Icon
          type={'iconSend'}
          className={`${styles.icon} ${styles.iconSend}`}
        />
      </div>
    </div>
  );
};

export default CommentInput;
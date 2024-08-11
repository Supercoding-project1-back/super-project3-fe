import React, { useEffect, useState } from 'react';
import styles from './CommentInput.module.scss';
import { IconField } from '../../../components/core/icon-field';
import { InputTextField } from '../../../components/core/input-text-field';

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
        <InputTextField
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
        <IconField
          type={'iconSend'}
          className={`${styles.icon} ${styles.iconSend}`}
        />
      </div>
    </div>
  );
};

export default CommentInput;
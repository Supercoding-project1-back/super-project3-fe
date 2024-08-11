import React from 'react';
import styles from './CommnetInput.module.scss';
import { IconField } from '../../../components/core/icon-field';
import { InputTextField } from '../../../components/core/input-text-field';

const CommnetInput = () => {
  return (
    <div className={styles.commnetInputWrap}>
      <div className={styles.inputWrap}>
        <InputTextField
          name={'comment'}
          placeholder={'댓글을 입력해주세요'}
        />
      </div>
      <div className={styles.iconWrap}>
        <IconField
          type={'iconSend'}
          className={`${styles.icon} ${styles.iconSend}`}
        />
      </div>
    </div>
  );
};

export default CommnetInput;
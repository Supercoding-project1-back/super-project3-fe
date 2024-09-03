import React from 'react';
import styles from './WriteVoteItem.module.scss';
import { Icon } from '../../../components/core';

const WriteVoteItem = ({ voteItem, index, onChange, onRemove }) => {
  return (
    <li>
      <div className={styles.inputWrap}>
        <input
          type='text'
          className={styles.voteInput}
          name={voteItem.id}
          value={voteItem.text}
          placeholder='항목을 입력해주세요'
          rows={1}
          onChange={(e) => onChange(index, e.target.value)}
        />
      </div>

      <div className={styles.iconWrap}>
        {voteItem.delete && (
          <Icon
            type={'IconDelete'}
            className={styles.icon}
            onClick={() => onRemove(voteItem.id)}
          />
        )}
      </div>
    </li>
  );
};

export default WriteVoteItem;
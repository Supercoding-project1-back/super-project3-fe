import React from 'react';
import styles from './VoteField.module.scss';
import { Icon } from '../';


const VoteField = ({ items = [], onVote, isReadOnly, onRemove }) => {
  return (
    <div className={styles.voteWrap}>
      <div className={styles.titleWrap}>
        <h3>투표선택</h3>
        {isReadOnly && <Icon type={'IconDelete'} className={styles.icon} onClick={onRemove} />}
      </div>

      <ul className={styles.votelist}>
        {items.map((item) => (
          <li className={styles.voteItem} key={item.id}>
            <label>
              <input
                type="radio"
                name="vote"
                onClick={() => onVote && onVote(item.id)}
                disabled={isReadOnly}
              />
              <span>{item.content}</span>
            </label>
          </li>
        ))}
      </ul>

      {!isReadOnly && <button className={styles.voteButton}>투표하기</button>}
    </div>
  );
};

export default VoteField;
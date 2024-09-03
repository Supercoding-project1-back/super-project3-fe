import React from 'react';
import styles from './VoteField.module.scss';


const VoteField = ({ items = [], onVote, isReadOnly }) => {
  return (
    <>
      <ul className={styles.votelist}>
        {items.map((item) => {
          return (
            <li
              className={styles.voteItem}
              key={item.id}
            >
              <label>
                <input
                  type="radio"
                  name="vote"
                  onClick={() => onVote && onVote(item.id)}
                  disabled={isReadOnly}
                />
                <span>{item.text}</span>
              </label>
            </li>
          )
        })}

      </ul>

      {!isReadOnly && <button className={styles.voteButton}>투표하기</button>}
    </>
  );
};

export default VoteField;
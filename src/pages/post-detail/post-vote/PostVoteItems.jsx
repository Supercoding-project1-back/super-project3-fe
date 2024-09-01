import React from 'react';
import styles from './PostVoteItems.module.scss';

const PostVoteItems = () => {
  return (
    <>
      <ul className={styles.votelist}>
        <li className={styles.voteItem}>
          <label>
            <input type="radio" name="vote" />
            <span>항목1</span>
          </label>
        </li>

        <li className={styles.voteItem}>
          <label>
            <input type="radio" name="vote" />
            <span>항목2</span>
          </label>
        </li>
      </ul>

      <button className={styles.voteButton}>투표하기</button>
    </>
  );
};

export default PostVoteItems;
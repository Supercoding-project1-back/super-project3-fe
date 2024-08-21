import React from 'react';
import styles from './PostVote.module.scss';
import PostVoteItems from './PostVoteItems';

const PostVote = () => {
  return (
    <div className={styles.voteWrap}>
      <h3>투표선택</h3>

      <PostVoteItems />
    </div>
  );
};

export default PostVote;
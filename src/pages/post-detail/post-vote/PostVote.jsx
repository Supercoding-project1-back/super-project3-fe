import React from 'react';
// import styles from './PostVote.module.scss';
import { Vote } from '../../../components/core';

const PostVote = ({ voteItems }) => {
  if (!voteItems) return null;

  // voteRequest (서버데이터형태=객체) → voteItems (클라이언트데이터형태=배열)로 변환
  const formattedVoteItems = Object.keys(voteItems).map(key => ({
    id: key,
    content: voteItems[key]
  }));


  return (
    <>
      <Vote items={formattedVoteItems} isReadOnly={false} />
    </>
  );
};

export default PostVote;
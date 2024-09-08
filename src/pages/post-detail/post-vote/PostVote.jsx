import React, { useState } from 'react';
// import styles from './PostVote.module.scss';
import { Vote } from '../../../components/core';

const PostVote = ({ voteItems, voteId }) => {
  // const [selectedVote, setSelectedVote] = useState(null);
  // const [voteResults, setVoteResults] = useState([]);
  // const [hasVoted, setHasVoted] = useState(false);

  if (!voteItems) return null;

  // voteRequest (서버데이터형태=객체) → voteItems (클라이언트데이터형태=배열)로 변환
  const formattedVoteItems = Object.keys(voteItems)
    .filter(key => key.startsWith("item")) // "item"으로 시작하는 키만 선택
    .map(key => ({
      id: key,
      content: voteItems[key]
    }))
    .filter(item => item.content); // content가 비어있지 않은 항목만 선택


  return (
    <>
      <Vote
        items={formattedVoteItems}
        isReadOnly={false}
      />
    </>
  );
};

export default PostVote;
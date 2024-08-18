import React, { useState } from 'react';
import styles from './WriteVote.module.scss';
import { Icon, InputTextField } from '../../../components/core';

const WriteVote = () => {
  const [voteItems, setVoteItems] = useState([
    { id: Date.now(), text: '', votes: 0, delete: false },
    { id: Date.now() + 1, text: '', votes: 0, delete: false },
  ]);

  // 투표항목추가
  const handleAddVoteItem = () => {
    if (voteItems.length < 4) {
      setVoteItems([...voteItems, {
        id: Date.now(),
        text: '',
        votes: 0,
        delete: true
      }]);
    }
  }

  const handleChangeVoteItem = (index, value) => {
    const newVoteItems = [...voteItems]
    newVoteItems[index].text = value;
    setVoteItems(newVoteItems);
  }

  // 투표항목삭제
  const handleRemoveVoteItem = (id) => {
    const newVoteItems = voteItems.filter(voteItem => voteItem.id !== id);
    setVoteItems(newVoteItems);
    console.log(id);
  }

  return (
    <div className={styles.voteWrap}>
      <ul className={styles.voteInputWrap}>
        {voteItems.map((voteItem, index) => {
          return (
            <li key={voteItem.id}>
              <InputTextField
                className={styles.voteInput}
                name={voteItem.text}
                value={voteItem.text}
                placeholder='항목을 입력해주세요'
                rows={1}
                onChange={(value) => handleChangeVoteItem(index, value)}
              />

              {voteItem.delete && (
                <Icon
                  type={'iconDelete'}
                  className={styles.icon}
                  onClick={() => handleRemoveVoteItem(voteItem.id)}
                />
              )}
            </li>
          )
        })}

      </ul>
      <div className={styles.buttonWrap}>
        <button
          onClick={handleAddVoteItem}
          disabled={voteItems.length >= 4}
        >항목 추가</button>
      </div>
    </div>
  );
};

export default WriteVote;
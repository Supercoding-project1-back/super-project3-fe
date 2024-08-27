import React, { useContext } from 'react';
import styles from './WriteVote.module.scss';
import { Icon, InputTextField } from '../../../components/core';
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteVote = () => {
  const { voteItems, setVoteItems } = useContext(PostFormContext);


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
    setVoteItems(prevVoteItems => {
      const newVoteItems = [...prevVoteItems];
      newVoteItems[index] = { ...newVoteItems[index], text: value };
      return newVoteItems;
    });
  }

  // 투표항목삭제
  const handleRemoveVoteItem = (id) => {
    const newVoteItems = voteItems.filter(voteItem => voteItem.id !== id);
    setVoteItems(newVoteItems);
  }

  return (
    <>
      <div className={styles.voteWrap}>
        <ul className={styles.voteInputWrap}>
          {voteItems.map((voteItem, index) => {
            return (
              <li key={voteItem.id}>
                <div className={styles.inputWrap}>
                  <input
                    type='text'
                    className={styles.voteInput}
                    name={voteItem.id}
                    value={voteItem.text}
                    placeholder='항목을 입력해주세요'
                    rows={1}
                    onChange={(e) => handleChangeVoteItem(index, e.target.value)}
                  />

                  {/* <InputTextField
                    className={styles.voteInput}
                    name={voteItem.text}
                    value={voteItem.text}
                    placeholder='항목을 입력해주세요'
                    rows={1}
                    onChange={(name, value) => handleChangeVoteItem(index, value)}
                  /> */}
                </div>

                <div className={styles.iconWrap}>
                  {voteItem.delete && (
                    <Icon
                      type={'IconDelete'}
                      className={styles.icon}
                      onClick={() => handleRemoveVoteItem(voteItem.id)}
                    />
                  )}
                </div>
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
    </>
  );
};

export default WriteVote;
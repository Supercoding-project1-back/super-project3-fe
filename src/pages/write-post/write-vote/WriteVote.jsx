import React, { useCallback, useContext } from 'react';
import styles from './WriteVote.module.scss';
import { Icon, InputTextField } from '../../../components/core';
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteVote = () => {
  const { voteItems, setVoteItems } = useContext(PostFormContext);


  // 투표항목추가
  const handleAddVoteItem = useCallback(() => {
    if (voteItems.length < 4) {
      setVoteItems(prevVoteItems => [
        ...prevVoteItems,
        {
          id: Date.now(),
          text: '',
          votes: 0,
          delete: true
        }
      ]);
    }
  }, [voteItems, setVoteItems]);


  const handleChangeVoteItem = useCallback((id, value) => {
    setVoteItems(prevVoteItems => prevVoteItems.map(item =>
      item.id === id ? { ...item, text: value } : item
    ));
  }, [setVoteItems]);


  // 투표항목삭제
  const handleRemoveVoteItem = useCallback((id) => {
    setVoteItems(prevVoteItems => prevVoteItems.filter(voteItem => voteItem.id !== id));
  }, [setVoteItems]);

  return (
    <>
      <div className={styles.voteWrap}>
        <ul className={styles.voteInputWrap}>
          {voteItems.map((voteItem, index) => {
            return (
              <li key={voteItem.id}>
                <div className={styles.inputWrap}>
                  <InputTextField
                    className={styles.voteInput}
                    name={voteItem.text}
                    value={voteItem.text}
                    placeholder='항목을 입력해주세요'
                    rows={1}
                    onChange={(name, value) => handleChangeVoteItem(voteItem.id, value)}
                  />
                </div>

                <div className={styles.iconWrap}>
                  {voteItem.id > 2 && (
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
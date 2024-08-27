import React, { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const PostFormContext = createContext();

export const PostFormProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [voteItems, setVoteItems] = useState([
    { id: Date.now(), text: '', votes: 0, delete: false },
    { id: Date.now() + 1, text: '', votes: 0, delete: false },
  ]);
  const [uploadWriteVote, setUploadWriteVote] = useState([]);


  // 글쓰기페이지에 투표 첨부
  const addVoteToPost = () => {
    setUploadWriteVote([...voteItems]);
  }

  // 글쓰기페이지에 첨부한 투표 삭제
  const removeVoteToPost = () => {
    setUploadWriteVote([]);
    setVoteItems([
      { id: Date.now(), text: '', votes: 0, delete: false },
      { id: Date.now() + 1, text: '', votes: 0, delete: false },
    ]);
  }

  // 작성한 게시글 등록
  const addPost = () => {
    const postData = {
      category,
      title,
      contents,
      voteItems: uploadWriteVote,
    };

    console.log("게시글 데이터:", postData);
    // navigate('/');
  };



  // const addVoteItem = () => {
  //   if (voteItems.length < 4) {
  //     setVoteItems((prevItem) =>
  //       [...prevItem, { id: Date.now(), text: '', votes: 0, delete: true }]
  //     )
  //   }
  // }



  // const removeVoteItem = (itemId) => {
  //   setVoteItems((prevItem) => {
  //     return (
  //       prevItem.filter((item) => item.id !== itemId)
  //     )
  //   })
  // }


  return (
    <PostFormContext.Provider
      value={{
        category,
        setCategory,
        title,
        setTitle,
        contents,
        setContents,
        voteItems,
        setVoteItems,
        uploadWriteVote,
        setUploadWriteVote,
        addVoteToPost,
        removeVoteToPost,
        addPost,
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
}
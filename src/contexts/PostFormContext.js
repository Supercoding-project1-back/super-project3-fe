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

  const addPost = () => {
    const postData = {
      category,
      title,
      contents,
      voteItems,
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
        addPost,
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
}
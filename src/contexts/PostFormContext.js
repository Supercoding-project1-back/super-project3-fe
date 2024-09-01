import React, { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const PostFormContext = createContext();

export const PostFormProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const addPost = () => {
    const postData = {
      category,
      title,
      contents,
    };

    console.log("게시글 데이터:", postData);
    // navigate('/');
  };


  return (
    <PostFormContext.Provider
      value={{
        category,
        setCategory,
        title,
        setTitle,
        contents,
        setContents,
        addPost,
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
}
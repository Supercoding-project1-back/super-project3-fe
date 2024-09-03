import React, { createContext, useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPost } from '../api/post';

export const PostFormContext = createContext();

export const PostFormProvider = ({ children }) => {
  // const navigate = useNavigate();


  const voteId = () => {
    return `id_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  };

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [voteItems, setVoteItems] = useState([
    { id: voteId(), text: '' },
    { id: voteId(), text: '' }
  ]);
  const [uploadWriteVote, setUploadWriteVote] = useState([]);


  // 글쓰기페이지에 투표 첨부
  const addVoteToPost = useCallback(() => {
    setUploadWriteVote([...voteItems]);
  }, [voteItems])

  // 글쓰기페이지에 첨부한 투표 삭제
  const removeVoteToPost = useCallback(() => {
    setUploadWriteVote([]);
    setVoteItems([
      { id: voteId(), text: '' },
      { id: voteId(), text: '' },
    ]);
  }, []);


  // 작성한 게시글 등록
  const addPost = useCallback(async () => {
    const newPostData = {
      category,
      title,
      content,
      voteItems: uploadWriteVote,
    };

    // try {
    //   const response = await createPost(newPostData);
    //   const postId = response.id;

    //   console.log("게시글 데이터:", postId, newPostData);
    //   navigate(`/post/${postId}`);

    // } catch (error) {
    //   console.log(`게시글 작성 등록 오류 : ${error}`);
    // }

  }, [category, title, content, uploadWriteVote]);



  return (
    <PostFormContext.Provider
      value={{
        category,
        setCategory,
        title,
        setTitle,
        content,
        setContent,
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
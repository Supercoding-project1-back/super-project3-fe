import axios from "axios";
import { post } from "jquery";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


// 새 게시글 작성 api
export const createPost = async (newPostData) => {
  try {
    const token = localStorage.getItem('token');

    // voteRequest가 없으면 null로 설정
    const postData = {
      title: newPostData.title,
      content: newPostData.content,
      category: newPostData.category,
      voteRequest: newPostData.voteRequest,
    };

    console.log("postData :", postData);

    const response = await axios.post(
      `${API_BASE_URL}/api/posts/create-post`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`새 게시글 작성 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
};


// 게시글 상세 페이지 조회
export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts/post/${id}`);
    return response.data;
  } catch (error) {
    console.error(`게시글 상세 조회 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
};


// 게시글 수정
export const modifyPost = async (id) => {
  try {
    const token = localStorage.getItem('token');

    const modifiedPostData = {
      title: post.title,
      content: post.content,
      category: post.category,
      voteRequest: post.voteRequest
    };

    const response = await axios.put(
      `${API_BASE_URL}/api/posts/modify-post/${id}`,
      modifiedPostData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(`게시글 수정 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
}


// 게시글 삭제
export const deletePost = async (id) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`${API_BASE_URL}/api/posts/delete-post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`게시글 삭제 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
};
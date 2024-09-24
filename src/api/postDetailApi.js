import axios from "axios";

// API 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// 새 게시글 작성 API
export const createPost = async (newPostData) => {
  try {
    // voteRequest가 없으면 null로 설정
    const postData = {
      title: newPostData.title,
      content: newPostData.content,
      category: newPostData.category,
      voteRequest: newPostData.voteRequest,
    };

    console.log("postData :", postData);

    const response = await api.post("/api/posts/create-post", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    const response = await api.get(`/api/posts/post/${id}`);
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
export const modifyPost = async (id, updatePostData) => {
  try {
    const modifiedPostData = {
      title: updatePostData.title,
      content: updatePostData.content,
      category: updatePostData.category,
      voteRequest: updatePostData.voteRequest,
    };

    const response = await api.put(`/api/posts/modify-post/${id}`, modifiedPostData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`게시글 수정 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
};

// 게시글 삭제
export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/api/posts/delete-post/${id}`, {
      headers: {
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
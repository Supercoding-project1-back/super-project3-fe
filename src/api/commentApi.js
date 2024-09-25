import axios from "axios";

// API 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// 댓글 리스트
export const getCommentList = async (postId, page, size) => {
  try {
    const response = await api.get(`/api/comments/comments/${postId}`, {
      params: {
        page,
        size,
        sort: [],
      },
    });
    return response.data;
  } catch (error) {
    console.error('댓글 리스트 API 오류 발생:', error);
  }
};

// 댓글 등록 API
export const createComment = async (postId, content) => {
  try {
    const response = await api.post(
      "/api/comments/create-comment",
      { postId, content },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('댓글 등록 API 오류 발생:', error);
    throw error;
  }
};

// 댓글 수정 API
export const modifyComment = async (commentId, postId, newContent) => {
  try {
    // 요청 전 데이터 확인
    // console.log('수정할 댓글 ID:', commentId);
    // console.log('수정할 포스트 ID:', postId);
    // console.log('수정할 댓글 내용:', newContent);

    const response = await api.put(
      `/api/comments/modify-comment/${commentId}`,
      { postId: postId, content: newContent },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log('수정된 댓글 응답 데이터:', response.data);
    return response.data;
  } catch (error) {
    console.error("댓글 수정 API 오류 발생:", error);
    throw error;
  }
};

// 댓글 삭제 API
export const deleteCommentApi = async (commentId) => {
  try {
    const response = await api.delete(`/api/comments/delete-comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("댓글 삭제 API 오류 발생:", error);
    throw error;
  }
};
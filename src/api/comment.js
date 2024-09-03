import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`,
  },
});

// 댓글 등록
export const createComment = async (postId, content) => {
  try {
    const response = await api.post(`/api/comments/create-comment`, {
      postId,
      content,
    });
    return response.data;
  } catch (error) {
    console.error('댓글 등록 중 오류 발생:', error);
    throw error;
  }
}
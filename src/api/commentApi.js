import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


// 댓글 리스트
export const getCommentList = async (postId, page, size) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/comments/comments/${postId}`, {
      params: {
        page,
        size,
        sort: [],
      }
    });
    return response.data;
  } catch (error) {
    console.error('댓글 리스트 API 오류 발생:', error);
  }
}



// 댓글 등록 API
export const createComment = async (postId, content) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_BASE_URL}/api/comments/create-comment`,
      { postId, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('댓글 등록 API 오류 발생:', error);
    throw error;
  }
}


// 댓글 수정 API
export const modifyComment = async (commentId, postId, newContent) => {
  try {
    const token = localStorage.getItem('token');

    // 요청 전 데이터 확인
    console.log('수정할 댓글 ID:', commentId);
    console.log('수정할 포스트 ID:', postId);
    console.log('수정할 댓글 내용:', newContent);

    const response = await axios.put(
      `${API_BASE_URL}/api/comments/modify-comment/${commentId}`,
      { postId: postId, content: newContent },
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
    const token = localStorage.getItem('token');
    const response = await axios.delete(
      `${API_BASE_URL}/api/comments/delete-comment/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.error("댓글 삭제 API 오류 발생:", error);
    throw error;
  }
};
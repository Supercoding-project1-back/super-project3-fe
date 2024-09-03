import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`,
  },
});


// 새 게시글 작성 api
export const createPost = async (newPostData) => {
  try {
    // voteRequest가 없으면 null로 설정
    const postData = {
      ...newPostData,
      voteRequest: newPostData.voteItems.length
        ? newPostData.voteItems.reduce((acc, item, index) => {
          acc[`item${index + 1}`] = item.text;
          return acc;
        }, {})
        : null,
    };

    console.log("Sending data to server:", postData);

    const response = await api.post('/api/posts/create-post', postData);
    return response.data;
  } catch (error) {
    console.error(`새 게시글 작성 오류: ${error.response?.data || error.message}`);
    throw error;
  }
};


// 게시글 상세 페이지 조회
export const getPostById = async (id) => {
  const response = await api.get(`/api/posts/post/${id}`);
  return response.data;
}
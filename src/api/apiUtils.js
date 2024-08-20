import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

// 사용자 정보 가져오기
export const getUserInfo = async () => {
  const response = await api.get("/api/users/me");
  return response.data;
};

// 게시글 리스트 가져오기
export const getPosts = async (page = 0, size = 10, sort = "views,desc") => {
  const response = await api.get("/api/posts/posts", {
    params: {
      page,
      size,
      sort,
    },
  });
  return response.data;
};

// 카테고리별 게시글 가져오기
export const getPostsByCategory = async (
  category,
  page = 0,
  size = 10,
  sort = "views,desc"
) => {
  const response = await api.get(`/api/posts/posts-by-category/${category}`, {
    params: {
      page,
      size,
      sort,
    },
  });
  return response.data;
};

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

// 카테고리별 게시글 가져오기
export const getPostsByCategory = async (
  category,
  page = 0,
  size = 1,
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

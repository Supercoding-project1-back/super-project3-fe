// src/api/postListApi.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // 동적으로 토큰을 가져옴
  },
});

// 프로필:사용자 게시글 전체 조회할 경우
export const getUserPosts = async (
  page = 0,
  size = 1000,
  sort = "createdAt,desc"
) => {
  try {
    const response = await api.get("/api/posts/posts-by-user", {
      params: { page, size, sort },
    });
    return response.data.content;
  } catch (error) {
    console.error("게시글 조회 실패:", error);
    throw error;
  }
};

// 프로필: 내가 쓴 글 최신순 5개 정렬
export const getPostsByUser = async (
  page = 0,
  size = 5,
  sort = "createdAt,desc"
) => {
  try {
    const response = await api.get("/api/posts/posts-by-user", {
      params: {
        page,
        size,
        sort,
      },
    });
    return response.data.content; // 게시글 내용만 반환
  } catch (error) {
    console.error("게시글 조회 실패", error);
    return [];
  }
};

// 카테고리별 게시글 가져오기
export const getPostsByCategory = async (
  category,
  page = 0,
  size = 1,
  sort = "views,desc"
) => {
  try {
    const response = await api.get(`/api/posts/posts-by-category/${category}`, {
      params: {
        page,
        size,
        sort,
      },
    });
    return response.data.content; // 게시글 내용만 반환
  } catch (error) {
    console.error("카테고리별 게시글 조회 실패", error);
    return [];
  }
};

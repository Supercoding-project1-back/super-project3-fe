import axios from "axios";

//APi 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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

// 인기 게시글 조회 API
export const getPopularPosts = async (
  page = 0,
  size = 3,
  sort = "views,desc",
  category = "전체글"
) => {
  try {
    let response;
    if (category === "전체글") {
      response = await api.get("/api/posts/posts", {
        params: { page, size, sort },
      });
    } else {
      response = await api.get(`/api/posts/posts-by-category/${category}`, {
        params: { page, size, sort },
      });
    }
    return response.data.content;
  } catch (error) {
    console.error("인기 게시글 조회 실패", error);
    return [];
  }
};

// 사용자 게시글 전체 조회
export const fetchAllUserPosts = async (
  page = 0,
  size = 10000,
  sort = "createdAt,desc"
) => {
  try {
    const response = await api.get("/api/posts/posts", {
      params: { page, size, sort },
    });
    return response.data.content;
  } catch (error) {
    console.error("게시글 조회 실패:", error);
    throw error;
  }
};

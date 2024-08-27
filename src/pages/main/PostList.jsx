import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(0); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const getPostList = async (pageNumber = 0) => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts`,
        {
          params: {
            page: pageNumber,
            size: 3, // 페이지당 게시글 수
          },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`,
          },
        }
      );

      setPostList(resp.data.content); // 현재 페이지의 게시글 목록 설정
      setTotalPages(resp.data.totalPages); // 전체 페이지 수 설정
      setPage(pageNumber); // 현재 페이지 설정
    } catch (error) {
      console.error("Error fetching post list:", error);
    }
  };

  useEffect(() => {
    getPostList(page); // 컴포넌트 마운트될 때 게시글 목록 조회
  }, [page]);

  return (
    <div className={styles.postList}>
      {postList.map((post) => (
        <div className={styles.postItem} key={post.id}>
          <Link to={`/post/${post.id}`}>
            <div className={styles.postContent}>
              <div className={styles.contentWrapper}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postText}>{post.content}</p>
              </div>
              <div className={styles.postDetails}>
                <span>작성자 {post.email}</span>
                <span>조회수 {post.views}</span>
                <span>
                  작성일 {new Date(post.create_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className={styles.pagination}>
        <button
          onClick={() => getPostList(page - 1)}
          disabled={page <= 0}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <button
          onClick={() => getPostList(page + 1)}
          disabled={page >= totalPages - 1}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;

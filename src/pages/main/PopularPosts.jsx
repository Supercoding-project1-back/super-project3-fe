import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link 컴포넌트를 임포트
import styles from "./PopularPosts.module.scss";
import postImage from "../../assets/icons/icon-image.svg";

const PopularPosts = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  const getPopularPosts = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts`,
        {
          params: {
            page: 0,
            size: 3, // 최대 3개의 게시글만 가져옴
            sort: "views,desc", // 조회수 기준으로 내림차순 정렬
          },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`, // 헤더의 토큰을 환경 변수로 가져옴
          },
        }
      );

      setPopularPosts(resp.data.content); // 인기 게시글 목록 설정
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    }
  };

  useEffect(() => {
    getPopularPosts(); // 컴포넌트 마운트 시 인기 게시글 조회
  }, []);

  return (
    <div className={styles.popularPosts}>
      <div className={styles.popularHeader}>
        <span className={styles.popularLabel}>🔥 인기글 🔥</span>
      </div>
      <ul className={styles.postList}>
        {popularPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`/post/${post.id}`} className={styles.postLink}>
              <div className={styles.category}>{post.category}</div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.postDetails}>
                  <span>{post.email}</span>
                  <span className={styles.postDate}>
                    {new Date(post.create_at).toLocaleDateString()}
                  </span>
                  <span className={styles.postViews}>조회수 {post.views}</span>
                </div>
              </div>
              <div className={styles.postImage}>
                <img src={postImage} alt="이미지" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;

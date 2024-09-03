import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./PopularPosts.module.scss";
import postImage from "../../assets/icons/icon-image.svg";
import { Icon } from "../../components/core";

const PopularPosts = ({ selectedCategory }) => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const getPopularPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        let resp;
        if (selectedCategory === "전체글") {
          // 전체글에 대해 조회
          resp = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts`,
            {
              params: {
                page: 0,
                size: 3, // 최대 3개의 게시글만 가져옴
                sort: "views,desc", // 조회수 기준으로 내림차순 정렬
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } else {
          // 특정 카테고리에 대해 조회
          resp = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts-by-category/${selectedCategory}`,
            {
              params: {
                page: 0,
                size: 3,
                sort: "views,desc", // 조회수 기준으로 내림차순 정렬
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }

        setPopularPosts(resp.data.content); // 인기 게시글 목록 설정
      } catch (error) {
        console.error("Error fetching popular posts:", error);
      }
    };
    getPopularPosts(); // 카테고리 변경 시 인기 게시글 조회
  }, [selectedCategory]);

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
                  <div className={styles.detailInfos}>
                    <span>{post.nickname}</span>
                    <Icon type={"IconTime"} className={styles.iconTime} />
                    <span>
                      {new Date(post.create_at).toLocaleDateString("ko-kr")}
                    </span>
                  </div>
                  <div className={styles.detailInfos}>
                    <Icon type={"IconViews"} className={styles.iconViews} />
                    <span>{post.views}</span>
                  </div>
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

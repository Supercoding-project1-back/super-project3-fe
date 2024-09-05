// PopularPosts.js
import React, { useEffect, useState } from "react";
import { getPopularPosts } from "../../api/postListApi";
import { Link } from "react-router-dom";
import styles from "./PopularPosts.module.scss";
import postImage from "../../assets/icons/icon-image.svg";
import { Icon } from "../../components/core";

const PopularPosts = ({ selectedCategory }) => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const posts = await getPopularPosts(
          0,
          3,
          "views,desc",
          selectedCategory
        );
        setPopularPosts(posts);
      } catch (error) {
        console.error("Error fetching popular posts:", error);
      }
    };

    fetchPopularPosts(); // 카테고리 변경 시 인기 게시글 조회
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
                {post.postDetailResponse?.image1 ? (
                  <img src={post.postDetailResponse.image1} alt="image1" />
                ) : (
                  <img src={postImage} alt="기본 이미지" />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;

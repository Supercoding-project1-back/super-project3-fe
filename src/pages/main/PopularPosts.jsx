import React, { useEffect, useState } from "react";
import { ButtonField as Button } from "../../components/core/button-field";
import styles from "./PopularPosts.module.scss";
import { getPostsByCategory } from "../../api/apiUtils";

const PopularPosts = ({ selectedCategory }) => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const postsData = await getPostsByCategory(
          selectedCategory,
          0,
          10,
          "views,desc"
        );
        const posts = postsData.content;

        if (posts && posts.length > 0) {
          const sortedPosts = posts.slice(0, 3); // 상위 3개의 게시글만 표시
          setPopularPosts(sortedPosts);
        }
      } catch (error) {
        console.error(
          "인기글 조회를 실패했습니다.",
          error.response?.data || error.message
        );
      }
    };

    fetchPopularPosts();
  }, [selectedCategory]);

  return (
    <div className={styles.popularPosts}>
      <Button label="🔥 인기글 🔥" className={styles.popularButton} />
      <ul>
        {popularPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.postDetails}>
              <p className={styles.postViews}>조회수 {post.views}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;

import React, { useEffect, useState } from "react";
import { ButtonField as Button } from "../../components/core/button-field";
import styles from "./PopularPosts.module.scss";
import { getAllPosts } from "../../api/test";

const PopularPosts = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const posts = await getAllPosts({ page: 1, size: 10 });

        if (posts && posts.length > 0) {
          // 조회수가 높은 순서로 정렬하여 상위 3개의 게시글만 게시
          const sortedPosts = posts
            .sort((a, b) => b.views - a.views)
            .slice(0, 3);
          setPopularPosts(sortedPosts);
        }
      } catch (error) {
        console.error("인기글 조회를 실패했습니다.", error);
      }
    };

    fetchPopularPosts();
  }, []);

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

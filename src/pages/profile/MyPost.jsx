import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./MyPost.module.scss";

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts-by-user`,
          {
            params: {
              page: 0,
              size: 100,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserPosts(response.data.content);
      } catch (error) {
        console.error("유저 정보 조회에 실패했습니다.", error);
      }
    };

    fetchUserPosts();
  }, []);

  return (
    <div className={styles.postsContainer}>
      <h2>내가 쓴 글 ({userPosts.length})</h2>
      <ul className={styles.postList}>
        {userPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <span className={styles.category}>{post.category}</span>
            <Link to={`/post/${post.id}`} className={styles.postTitle}>
              {post.title}
            </Link>
            <span className={styles.postDate}>
              {new Date(post.create_at).toLocaleDateString("ko-KR")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;

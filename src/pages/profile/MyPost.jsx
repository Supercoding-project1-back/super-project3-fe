import React, { useEffect, useState } from "react";
import { getUserPosts } from "../../api/postListApi";
import { Link } from "react-router-dom";
import styles from "./MyPost.module.scss";

const MyPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getUserPosts(0, 1000, "createdAt,desc");
        setUserPosts(posts);
      } catch (error) {
        console.error("유저 게시글 조회에 실패했습니다.", error);
      }
    };

    fetchPosts();
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

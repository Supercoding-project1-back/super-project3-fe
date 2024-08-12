import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import styles from "./PostList.module.scss";
import { getPosts } from "../../api/test";

const PostList = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("posts", ({ pageParam = 0 }) => getPosts({ pageParam }), {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.totalPages > pages.length ? pages.length : undefined;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (data) {
      setPosts(data.pages.flatMap((page) => page.content));
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handlePostClick = (id) => {
    navigate(`/postDetail/${id}`);
  };

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <div className={styles.postContent}>
            <div className={styles.contentWrapper}>
              <h3
                className={styles.postTitle}
                onClick={() => handlePostClick(post.id)}
              >
                {post.title}
              </h3>
              <div className={styles.postDetails}>
                <p className={styles.nickname}>{post.nickname}</p>
                <p className={styles.postDate}>
                  작성일 {new Date(post.create_at).toLocaleDateString()}
                </p>
              </div>
              <p className={styles.postText}>
                {post.content.length > 50
                  ? `${post.content.substring(0, 40)}...`
                  : post.content}
              </p>
              {post.img && (
                <img
                  src={post.img}
                  alt={post.title}
                  className={styles.postImg}
                />
              )}
            </div>
          </div>
        </div>
      ))}
      <div ref={ref} />
      {isFetchingNextPage && <p>로딩 중...</p>}
      {!hasNextPage && <p>모든 게시글을 불러왔습니다.</p>}
    </div>
  );
};

export default PostList;

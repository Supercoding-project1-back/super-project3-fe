import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
import { Icon } from "../../components/core";

const PostList = ({ selectedCategory }) => {
  const [allPosts, setAllPosts] = useState([]); // 전체 게시글 저장
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 게시글 저장
  const [page, setPage] = useState(0); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더 가져올 게시글이 있는지 여부
  const observer = useRef();
  const postsPerPage = 10; // 페이지당 게시글 수

  const fetchPosts = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/posts/posts`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`,
          },
        }
      );
      const posts = resp.data.content;
      setAllPosts(posts); // 모든 게시글 저장
    } catch (error) {
      console.error("Error fetching post list:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 컴포넌트 마운트 시 전체 게시글을 가져옴
  }, []);

  useEffect(() => {
    // 카테고리 변경 시 필터링 및 정렬
    const filtered = allPosts.filter((post) =>
      selectedCategory === "전체글" ? true : post.category === selectedCategory
    );

    const sorted = filtered.sort(
      (a, b) => new Date(b.create_at) - new Date(a.create_at)
    );

    setFilteredPosts(sorted.slice(0, (page + 1) * postsPerPage));
    setHasMore((page + 1) * postsPerPage < sorted.length);
  }, [selectedCategory, allPosts, page]);

  // Intersection Observer API를 이용해 무한 스크롤 구현
  const lastPostElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className={styles.postList}>
      {filteredPosts.map((post, index) => {
        const key = `${post.id}-${index}`; // 고유한 key 생성

        if (filteredPosts.length === index + 1) {
          return (
            <div ref={lastPostElementRef} className={styles.postItem} key={key}>
              <Link to={`/post/${post.id}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postText}>{post.content}</p>
                  </div>
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
              </Link>
            </div>
          );
        } else {
          return (
            <div className={styles.postItem} key={key}>
              <Link to={`/post/${post.id}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postText}>{post.content}</p>
                  </div>
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
              </Link>
            </div>
          );
        }
      })}
      {!hasMore && <div className={styles.endMessage}>마지막 게시글입니다</div>}
    </div>
  );
};

export default PostList;

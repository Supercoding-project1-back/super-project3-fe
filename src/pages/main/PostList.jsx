import React, { useEffect, useState, useRef, useCallback } from "react";
import { getPostsByCategory, fetchAllUserPosts } from "../../api/postListApi";
import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
import { Icon } from "../../components/core";

const PostList = ({ selectedCategory }) => {
  const [allPosts, setAllPosts] = useState([]); // 전체 게시글 저장
  const [page, setPage] = useState(0); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더 가져올 게시글이 있는지 여부
  const observer = useRef();
  const postsPerPage = 10; // 페이지당 게시글 수

  // 카테고리 변경 시 게시글 및 페이지 초기화
  useEffect(() => {
    setAllPosts([]);
    setPage(0);
    setHasMore(true);
  }, [selectedCategory]);

  // 게시글 조회
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let posts;

        if (selectedCategory === "전체글") {
          posts = await fetchAllUserPosts(page, postsPerPage, "createdAt,desc"); // 전체글
        } else {
          posts = await getPostsByCategory(
            selectedCategory,
            page,
            postsPerPage,
            "createdAt,desc"
          ); // 카테고리별
        }

        // 기존 게시글에 새로운 게시글을 추가
        setAllPosts((prevPosts) => [...prevPosts, ...posts]);

        // 더 이상 게시글이 없으면 hasMore를 false로 설정
        if (posts.length < postsPerPage) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching post list:", error);
      }
    };

    fetchPosts(); // 페이지나 카테고리가 변경될 때마다 새로운 게시글 조회
  }, [page, selectedCategory]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Fetching next page");
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className={styles.postList}>
      {allPosts.map((post, index) => {
        const key = `${post.id}-${index}`; // 고유한 key 생성

        return (
          <div
            ref={allPosts.length === index + 1 ? lastPostElementRef : null}
            className={styles.postItem}
            key={key}
          >
            <Link to={`/post/${post.id}`}>
              <div className={styles.postContent}>
                <div className={styles.contentWrapper}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postText}>{post.content}</p>
                </div>
                <div className={styles.postImage}>
                  {post.postDetailResponse?.image1 ? (
                    <img src={post.postDetailResponse.image1} alt="image1" />
                  ) : null}
                  {post.postDetailResponse?.image2 ? (
                    <img src={post.postDetailResponse.image2} alt="image2" />
                  ) : null}
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
      })}
      {!hasMore && <div className={styles.endMessage}>마지막 게시글입니다</div>}
    </div>
  );
};

export default PostList;

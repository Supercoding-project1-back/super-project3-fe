import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import styles from './PostDetail.module.scss';
import { CommentField } from './commets';
import {
  PostCategory,
  PostTitle,
  PostInfo,
  PostContents,
  PostVote,
  PostMap
} from './';
import ImgViewField from '../../components/core/img-view-field/ImgViewField';
import { deletePost, getPostById } from '../../api/postDetailApi';
import { PopupModalContext } from '../../contexts/PopupModalContext';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { Popup, popupType } = useContext(PopupModalContext);

  // 상세페이지 리스트
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (typeof id !== 'string') {
          console.log('잘못된 ID 형식:', id);  // ID가 문자열이 아닌 경우 로그 출력
          return;
        }

        const data = await getPostById(id);
        console.log(data);
        setPost(data);
        setLoading(false);

      } catch (error) {
        // console.error(`게시글 로딩 중 오류 발생 : ${error}`);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);


  // 게시글 수정페이지로 이동
  const handleModifyPost = async () => {
    navigate(`/post/edit/${id}`, { state: { post } });
    console.log(post)
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!post) {
    return <div>게시글 수정 후 불러오지 못했습니다.</div>;
  }


  const handleDeletePost = async () => {
    try {
      await deletePost(id);
      alert('게시글이 삭제되었습니다.');
      navigate('/'); // 삭제 후 메인 페이지로 이동
    } catch (error) {
      console.error('게시글 삭제 오류:', error);
      alert('게시글 삭제에 실패했습니다.');
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!post) {
    return <div>게시글을 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrap}>
          <PostCategory category={post.category} />
        </section>

        <section className={styles.wrap}>
          <PostTitle title={post.title} />
        </section>

        {/* 게시글 : 게시글정보 */}
        <section className={`${styles.wrap} ${styles.postInfo}`}>
          <PostInfo
            email={post.email}
            createAt={post.create_at}
            views={post.views}
          />
        </section>

        <section className={styles.wrap}>
          <PostContents content={post.content} />
        </section>

        <section className={styles.wrap}>
          <ImgViewField
            src={''}
            alt="게시글 이미지"
            className={styles.img}
          />
        </section>

        <section className={styles.wrap}>
          <PostVote voteItems={post.voteResponse} />
        </section>

        <section className={styles.wrap}>
          <PostMap />
        </section>

        {/* 댓글 영역 */}
        <CommentField postId={post.id} />
      </div>


      {/* 게시글 수정/삭제 팝업창 */}
      <Popup customClass={styles.popupModal}>
        {popupType === 'post' && (
          <>
            <div className={styles.buttonWrap} onClick={handleModifyPost}>
              <button>수정</button>
            </div>
            <div className={styles.buttonWrap} onClick={handleDeletePost}>
              <button>삭제</button>
            </div>
          </>
        )}
      </Popup>
    </>
  )
};

export default PostDetail;
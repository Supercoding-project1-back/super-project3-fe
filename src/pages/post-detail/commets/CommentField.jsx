import React, { useState } from 'react';
import styles from './CommentField.module.scss';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { createComment } from '../../../api/comment';

const CommentField = ({ postId }) => {
  // 댓글 상태 관리
  const [comments, setComments] = useState([]);

  // 댓글 수정 상태
  const [isEditing, setIsEditing] = useState(null);

  // 댓글 추가
  const addComment = async (text) => {
    try {
      const newComment = await createComment(postId, text);
      setComments([...comments, { id: newComment.postId, text: newComment.content, author: '닉네임' }]);
    } catch (error) {
      console.error('댓글 생성 오류:', error);
    }
  }

  // 댓글 수정
  const editComment = (id, newText) => {
    setComments(comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    ));
    setIsEditing(null);  // 수정모드 종료
  }

  // 댓글 삭제
  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  }

  // 댓글 입력창 제출 버튼 클릭 시, 조건에 따라 호출
  const handleCommentInputSubmit = (text) => {
    if (isEditing) {
      editComment(isEditing.id, text);
    } else {
      addComment(text);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.conmmentCount}>
        댓글 {comments.length}
      </div>

      {
        comments.length > 0 ? (
          <CommentList
            comments={comments}
            onEditClick={(id, text) => setIsEditing({ id, text })}
            deleteComment={deleteComment}
          />
        ) : (
          <div className={styles.noCommentMsg}>
            <p>아직 댓글이 없어요! 첫 대글을 남겨보세요</p>
          </div>
        )
      }

      <CommentInput
        addComment={handleCommentInputSubmit}
        editComment={isEditing ? handleCommentInputSubmit : null}
        initialText={isEditing?.text || ''}
      />
    </div >
  );
};

export default CommentField;
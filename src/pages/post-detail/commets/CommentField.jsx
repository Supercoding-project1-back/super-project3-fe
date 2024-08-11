import React, { useState } from 'react';
import styles from './CommentField.module.scss';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const CommentField = () => {
  // 댓글 상태 관리
  const [comments, setComments] = useState([]);

  // 댓글 수정 상태
  const [isEditing, setIsEditing] = useState(null);

  // 댓글 추가
  const addComment = (text) => {
    setComments([...comments, { id: Date.now(), text, author: '댓글작성자' }]);
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
      <div>
        댓글
        <span>{comments.length}</span>
      </div>

      <CommentList
        comments={comments}
        onEditClick={(id, text) => setIsEditing({ id, text })}
        deleteComment={deleteComment}
      />
      <CommentInput
        addComment={handleCommentInputSubmit}
        editComment={isEditing ? handleCommentInputSubmit : null}
        initialText={isEditing?.text || ''}
      />
    </div>
  );
};

export default CommentField;
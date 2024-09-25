import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../core';
import { useNavigate, useParams } from 'react-router';
import { PostFormContext } from '../../contexts/PostFormContext';
import { PopupModalContext } from '../../contexts/PopupModalContext';
import { UserContext } from "../../contexts/UserContext";

const Header = ({ type, location }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(window.history);

  const { isEdit, addPost, updatePost } = useContext(PostFormContext);
  const { openPopupHandler } = useContext(PopupModalContext);
  const { userLocation } = useContext(UserContext);


  const handleClickBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleClickLogo = () => {
    navigate("/");
  };


  const headerContent = () => {
    switch (type) {
      case "main":
        // 메인페이지 헤더 : 위치+검색
        return (
          <header className={`${styles.header} ${styles.mainHeader}`}>
            <div className={styles.leftWrap}>
              <span>{userLocation}</span>
              <Icon type={"IconLocation"} />
            </div>
            <div className={styles.rightWrap}>
              <Icon type={"IconSearch"} />
            </div>
          </header>
        );

      // 상세페이지 헤더 : 뒤로가기+(더보기버튼)
      case "detail":
        return (
          <header className={`${styles.header} ${styles.detailHeader}`}>
            <div className={styles.leftWrap} onClick={handleClickBack}>
              <Icon type={"IconBack"} className={styles.iconBack} />
            </div>
            <div className={styles.rightWrap}>
              <Icon type={'IconMore'} onClick={() => openPopupHandler('post')} />
            </div>
          </header>
        );

      // 글쓰기,수정페이지 헤더 : 뒤로가기+등록
      case "write":
        return (
          <header className={`${styles.header} ${styles.writeHeader}`}>
            <div className={styles.leftWrap}>
              {!isEdit ? (
                <Icon
                  type={'IconBack'}
                  className={styles.iconBack}
                  onClick={handleClickBack}
                />
              ) : null}
            </div>
            <div className={styles.rightWrap}>
              {!isEdit ? (
                <button onClick={addPost}>등록</button>
              ) : (
                <button onClick={() => updatePost(id)}>완료</button>
              )}
            </div>
          </header>
        );

      // 채팅방페이지 : 뒤로가기+닉네임
      case "chat":
        return (
          <header className={`${styles.header} ${styles.chatHeader}`}>
            <div className={styles.leftWrap} onClick={handleClickBack}>
              <Icon type={"IconBack"} className={styles.iconBack} />
            </div>
            <div>
              <span>상대방 닉네임1</span>
            </div>
            <div className={styles.rightWrap}>{null}</div>
          </header>
        );

      // 프로필페이지 : 메뉴텍스트 + 검색
      case "profile":
        return (
          <header className={`${styles.header} ${styles.profileHeader}`}>
            <div className={styles.leftWrap}>
              <span>프로필</span>
            </div>
            <div className={styles.rightWrap}>
              <Icon type={"IconSearch"} />
            </div>
          </header>
        );

      default:
        // 기본 헤더 : 로고+검색
        return (
          <header className={styles.header}>
            <div className={styles.leftWrap} onClick={handleClickLogo}>
              <Icon type={"IconLogo"} />
            </div>
            <div className={styles.rightWrap}>
              <Icon type={"IconSearch"} />
            </div>
          </header>
        );
    }
  };

  return <>{headerContent()}</>;
};

export default Header;

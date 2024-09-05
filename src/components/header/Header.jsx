import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Icon } from "../core";
import { useNavigate } from "react-router";
import { PostFormContext } from "../../contexts/PostFormContext";
import { UserContext } from "../../contexts/UserContext";

const Header = ({ type, location }) => {
  const navigate = useNavigate();
  // console.log(window.history);
  const { addPost } = useContext(PostFormContext);
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

      case "detail":
        return (
          <header className={`${styles.header} ${styles.detailHeader}`}>
            <div className={styles.leftWrap} onClick={handleClickBack}>
              <Icon type={"IconBack"} className={styles.iconBack} />
            </div>
            <div className={styles.rightWrap}>
              <Icon type={"IconMore"} />
            </div>
          </header>
        );

      // 글쓰기페이지 헤더 : 뒤로가기+등록
      case "write":
        return (
          <header className={`${styles.header} ${styles.writeHeader}`}>
            <div className={styles.leftWrap} onClick={handleClickBack}>
              <Icon type={"IconBack"} className={styles.iconBack} />
            </div>
            <div className={styles.rightWrap}>
              <button onClick={addPost}>등록</button>
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

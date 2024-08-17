import React from "react";
import { ReactComponent as ChatIcon } from "../../../assets/imgs/homeLogo.svg";
import styles from "./Login.module.scss";
import kakaoLoginBtn from "../../../assets/imgs/kakaoLoginBtn.png"; // 이미지 파일을 임포트

// 환경변수에서 REST API 키와 Redirect URI를 가져옵니다.
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = process.env.REACT_APP_K_REDIRECT_URI; // .env에서 가져오기
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const Login = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <div className={styles.container}>
        <ChatIcon className={styles["svg-icon"]} />
        <h1>지금 시작하세요</h1>
        <button onClick={handleKakaoLogin} className={styles.KakaoButton}>
          <img
            src={kakaoLoginBtn}
            alt="카카오 로그인"
            className={styles.kakaoBtnImage}
          />
        </button>
      </div>
    </>
  );
};

export default Login;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../../../assets/imgs/homeLogo.svg";
import styles from "./Login.module.scss";
import kakaoLoginBtn from "../../../assets/imgs/kakaoLoginBtn.png";

// 인가코드 받기
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = process.env.REACT_APP_K_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const Login = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    // 카카오 로그인 버튼을 누르면 카카오 인증 페이지로 이동
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // 토큰이 있으면 메인 페이지로 이동
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className={styles.container}>
        <ChatIcon className={styles["svg-icon"]} />
        <h1>함께하는 자취생활,</h1>
        <h1>간편하게 로그인 하세요</h1>
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

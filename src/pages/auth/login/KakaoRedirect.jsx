import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function KakaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  console.log("KakaoRedirect 컴포넌트가 렌더링되었습니다."); // 컴포넌트가 렌더링될 때 로그 출력

  useEffect(() => {
    console.log("useEffect 실행, code 값:", code); // useEffect가 실행될 때 로그 출력

    const fetchKakaoToken = async () => {
      try {
        console.log("fetchKakaoToken 함수 실행"); // 함수가 호출될 때 로그 출력

        const response = await axios.get(`/auth/kakao/callback?code=${code}`);

        // 서버로부터 받은 데이터 추출
        const { tokenInfo } = response.data;
        const { token, roles, email, isNewUser } = tokenInfo;

        // 로컬 스토리지에 데이터 저장
        localStorage.setItem("accessToken", token);
        localStorage.setItem("roles", JSON.stringify(roles));
        localStorage.setItem("email", email);
        localStorage.setItem("isNewUser", isNewUser);

        // 홈으로 리다이렉트
        console.log("홈으로 리다이렉트 중...");
        navigate("/");
      } catch (error) {
        console.error("Failed to fetch Kakao token", error);
      }
    };

    if (code) {
      fetchKakaoToken();
    } else {
      console.log("code가 없어서 fetchKakaoToken이 실행되지 않음");
    }
  }, [code, navigate]);

  return (
    <div>
      <h1>로그인 중입니다...</h1>
    </div>
  );
}

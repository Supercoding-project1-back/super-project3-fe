import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function KakaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/auth/kakao/callback`, {
          code,
        })
        .then((response) => {
          const data = response.data;
          console.log(data); // 디버깅용으로 콘솔에 출력

          if (data.tokenInfo && data.tokenInfo.token) {
            localStorage.setItem("jwt", data.tokenInfo.token);

            if (data.tokenInfo.isNewUser) {
              navigate("/select-region", {
                state: { token: data.tokenInfo.token },
              });
            } else {
              // 기존 사용자라면 메인 페이지로 이동
              navigate("/");
            }
          } else {
            console.error("로그인 응답에서 tokenInfo가 유효하지 않습니다.");
          }
        })
        .catch((error) => {
          console.error("오류 발생", error);
        });
    } else {
      console.error("인가 코드가 없습니다.");
    }
  }, [code, navigate]);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
}

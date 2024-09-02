import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const isNewUser = searchParams.get("isNewUser") === "true";

    if (token) {
      localStorage.setItem("token", token);

      if (isNewUser) {
        navigate("/addinfo");
      } else {
        // 기존 유저라면 메인 페이지로 이동
        navigate("/");
      }
    }
  }, [location, navigate]);

  return <div>처리 중입니다...</div>;
};

export default KakaoRedirect;

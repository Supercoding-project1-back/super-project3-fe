import axios from "axios";

//APi 기본 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// 사용자 정보 업데이트 API
export const updateUserData = async (updatedUserData) => {
  try {
    const response = await api.put(
      `/api/users/me`,
      updatedUserData
    );
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("유저 정보 업데이트 실패", error);
    throw error; // 에러 처리
  }
};

// 사용자 정보 조회 API (JSON 데이터 처리)
const fetchUserData = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("유저 정보가 없습니다. 로그인 해주세요.");
    }

    const resp = await api.get("/api/users/me", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 응답이 JSON 형식일 경우 바로 데이터 추출
    const responseData = resp.data;

    // JSON 객체에서 데이터 추출
    const userData = {
      id: responseData.id || "",
      email: responseData.email || "",
      nickname: responseData.nickname || "",
      residence: responseData.residence || "",
      profilePicture: responseData.profilePicture || "",
      introduction: responseData.introduction || "",
    };

    return userData; // 파싱된 사용자 데이터 반환
  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return null; // 에러 발생 시 null 반환
  }
};

export default fetchUserData;

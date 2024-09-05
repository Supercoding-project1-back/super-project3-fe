import axios from "axios";

const fetchUserLocation = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("유저 정보가 없습니다. 로그인 해주세요.");
    }

    const resp = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // 응답 데이터 파싱
    const responseData = resp.data;
    const residenceMatch = responseData.match(/residence=([^,]+)/);
    const residence = residenceMatch ? residenceMatch[1].trim() : "Unknown";

    return residence; // residence 값 반환
  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return "Unknown"; // 에러 발생 시 기본값 반환
  }
};

export default fetchUserLocation;

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

    // 응답이 JSON 형식일 경우 바로 데이터 추출
    const responseData = resp.data;

    // residence 값 추출 (JSON에서 직접 접근)
    const residence = responseData.residence || "Unknown";

    return residence; // residence 값 반환
  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return "Unknown"; // 에러 발생 시 기본값 반환
  }
};

export default fetchUserLocation;

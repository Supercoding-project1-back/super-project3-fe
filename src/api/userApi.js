import axios from 'axios';

// 사용자 정보를 가져오는 API 호출 함수
const fetchUserLocation = async () => {
  try {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/me`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_K_REST_API_KEY}`,
        },
      }
    );

    const user = resp.data.user; // 응답에서 user 객체 추출
    return user.residence; // residence 값 반환

  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return "Unknown"; // 에러 발생 시 기본값 반환
  }
};

export default fetchUserLocation;

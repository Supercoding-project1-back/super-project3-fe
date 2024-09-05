import axios from "axios";

// 사용자 정보 업데이트 API
export const updateUserData = async (updatedUserData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/me`,
      updatedUserData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("유저 정보 업데이트 실패", error);
    throw error; // 에러 처리
  }
};

const fetchUserData = async () => {
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

    // console.log("Response type:", typeof responseData); // 데이터타입 확인
    // console.log("Response data:", responseData); // 실제 데이터를 확인

    const idMatch = responseData.match(/id=(\d+)/);
    const emailMatch = responseData.match(/email=([^,]+)/);
    const nicknameMatch = responseData.match(/nickname=([^,]+)/);
    const residenceMatch = responseData.match(/residence=([^,]+)/);
    const profilePictureMatch = responseData.match(/profilePicture=([^,]+)/);
    const introductionMatch = responseData.match(/introduction=([^,]+)/);

    const userData = {
      id: idMatch ? idMatch[1].trim() : "",
      email: emailMatch ? emailMatch[1].trim() : "",
      nickname: nicknameMatch ? nicknameMatch[1].trim() : "",
      residence: residenceMatch ? residenceMatch[1].trim() : "",
      profilePicture: profilePictureMatch ? profilePictureMatch[1].trim() : "",
      introduction: introductionMatch ? introductionMatch[1].trim() : "",
    };

    return userData; // 파싱된 사용자 데이터 반환
  } catch (error) {
    console.error("유저 정보 조회 실패", error);
    return null; // 에러 발생 시 null 반환
  }
};

export default fetchUserData;

import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const uploadPostDetail = async (postId, formData) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(
      `${API_BASE_URL}/api/posts/create-postDetail/${postId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }
    );

    console.log('formData', formData);
    console.log('formData.postDetailResponse', formData.postDetailResponse);

    return response.data;
  } catch (error) {
    console.error(`이미지 및 지도 정보 업로드 오류: ${error.response?.data || error.message}`);
    if (error.response) {
      console.log('에러 데이터:', error.response.data);
      console.log('에러 상태:', error.response.status);
      console.log('에러 헤더:', error.response.headers);
    }
  }
};

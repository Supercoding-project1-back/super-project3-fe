import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const updateResidence = async (token, residence) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/update-residence`,
      { residence },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.isAxiosError) {
      throw new Error(error.response?.data || error.message);
    } else {
      throw new Error("예상치 못한 에러 발생");
    }
  }
};

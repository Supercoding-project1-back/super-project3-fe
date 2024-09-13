import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const postVoteApi = async (voteId, voteItem) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/vote`,
      {
        vote_id: voteId,
        vote_item: voteItem
      });
    return response.data;

  } catch (error) {
    console.error('투표하기 오류:', error);
  }
};



// 투표결과
export const getVoteResult = async (voteId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vote/${voteId}`);
    return response.data;
  } catch (error) {
    console.error('투표 결과 가져오기 오류:', error);
    throw error;
  }
};
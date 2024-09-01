import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { areas } from "../data/area";
import styles from "./AddInfo.module.scss";
import { updateResidence } from "../../../api/authApi";

const AddInfo = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSubArea, setSelectedSubArea] = useState("");
  const navigate = useNavigate();

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedSubArea(""); // 시/도를 변경하면 군/구 초기화
  };

  const handleSubAreaChange = (e) => {
    setSelectedSubArea(e.target.value);
  };

  const handleResidenceSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const residence = `${selectedArea} ${selectedSubArea}`;

    try {
      await updateResidence(token, residence);
      navigate("/");
    } catch (error) {
      if (error.isAxiosError) {
        console.error(
          "주소지 정보 수정 실패",
          error.response?.data || error.message
        );
      }
    }
  };

  const subAreas =
    areas.find((area) => area.name === selectedArea)?.subArea || [];

  return (
    <div className={styles.addInfocontainer}>
      <h3 className={styles.addInfotitle}>잠깐만!</h3>
      <h2 className={styles.addInfosubtitle}>
        대화를 원하는 지역을 선택해주세요.
      </h2>
      <form onSubmit={handleResidenceSubmit}>
        <label>
          시/도
          <select value={selectedArea} onChange={handleAreaChange} required>
            <option value="" disabled>
              시/도를 선택하세요
            </option>
            {areas.map((area, index) => (
              <option key={index} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          군/구
          <select
            value={selectedSubArea}
            onChange={handleSubAreaChange}
            required
            disabled={!selectedArea}
          >
            <option value="" disabled>
              군/구를 선택하세요
            </option>
            {subAreas.map((subArea) => (
              <option key={subArea} value={subArea}>
                {subArea}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles.addinfoButton}>
          선택후 가입하기
        </button>
      </form>
    </div>
  );
};

export default AddInfo;

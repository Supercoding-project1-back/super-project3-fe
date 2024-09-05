import React, { useState, useEffect } from "react";
import { updateUserData } from "../../api/userApi";
import ImgViewField from "../../components/core/img-view-field/ImgViewField";
import Button from "../../components/core/button-field/ButtonField";
import { areas } from "../../assets/data/area";
import styles from "./EditProfile.module.scss";

const EditProfile = ({ userData, onSave, onCancel }) => {
  const [nickname, setNickname] = useState(userData.nickname);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSubArea, setSelectedSubArea] = useState("");
  const [introduction, setIntroduction] = useState(userData.introduction);
  const [profilePicture, setProfilePicture] = useState(userData.profilePicture);

  // 기존 주소를 시/도와 군/구로 나누어 초기화
  useEffect(() => {
    const [area, subArea] = userData.residence.split(" ");
    setSelectedArea(area || "");
    setSelectedSubArea(subArea || "");
  }, [userData.residence]);

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    setSelectedSubArea(""); // 시/도를 변경하면 군/구 초기화
  };

  const handleSubAreaChange = (e) => {
    setSelectedSubArea(e.target.value);
  };

  const handleSave = async () => {
    try {
      const residence = `${selectedArea} ${selectedSubArea}`;
      const cleanIntroduction = introduction.trim();

      const updatedUserData = {
        nickname,
        residence,
        profilePicture,
        introduction: cleanIntroduction,
      };

      await updateUserData(updatedUserData);

      onSave(updatedUserData);
    } catch (error) {
      console.error("유저 정보 업데이트 실패", error);
    }
  };

  const subAreas =
    areas.find((area) => area.name === selectedArea)?.subArea || [];

  return (
    <div className={styles.editProfileContainer}>
      <h2>회원 정보 수정</h2>
      <ImgViewField
        src={profilePicture}
        alt="프로필 이미지"
        className={styles.profileImage}
      />
      <div className={styles.inputField}>
        <label>닉네임</label>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div className={styles.inputField}>
        <label>위치 설정</label>
        <div className={styles.locationSelect}>
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
        </div>
      </div>
      <div className={styles.inputField}>
        <label>자기소개</label>
        <textarea
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button label="수정완료" onClick={handleSave} isActive={true} />
        <Button label="취소" onClick={onCancel} isActive={false} />
      </div>
    </div>
  );
};

export default EditProfile;

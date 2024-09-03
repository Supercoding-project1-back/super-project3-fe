import React, { useEffect, useState } from "react";
import fetchUserData from "../../api/userApi";
import ImgViewField from "../../components/core/img-view-field/ImgViewField";
import Button from "../../components/core/button-field/ButtonField";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    getUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <section className={styles.profileSection}>
        <ImgViewField
          src={userData.profilePicture}
          alt="프로필 이미지"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <div className={styles.nicknameInfo}>
            <h3>{userData.nickname}</h3>
          </div>
          <div className={styles.residenceInfo}>
            <p>{userData.residence}</p>
          </div>
          <h4>자기소개</h4>
          <p>{userData.introduction}</p>
          <Button label="수정하기" onClick={() => {}} isActive={true} />
        </div>
      </section>

      <section className={styles.postsSection}>
        <h4>내가 쓴 글 (5)</h4>
        <ul className={styles.postList}>
          {[...Array(3)].map((_, index) => (
            <li key={index} className={styles.postItem}>
              <span className={styles.category}>일상</span>
              <span className={styles.postTitle}>게시글입니다</span>
              <span className={styles.postDate}>2024.07.29</span>
              <span className={styles.postViews}></span>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <Button label="전체 조회" onClick={() => {}} isActive={true} />
        </div>
      </section>
    </div>
  );
};

export default Profile;

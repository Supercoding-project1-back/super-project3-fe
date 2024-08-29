import React from "react";
import ImgViewField from "../../components/core/img-view-field/ImgViewField";
import Button from "../../components/core/button-field/ButtonField";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <section className={styles.profileSection}>
        <ImgViewField
          src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/944/eabb97e854d5e5927a69d311701cc211_res.jpeg"
          alt="프로필 이미지"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h3>커뮤낭인님</h3>
          <p>서울시 서초구</p>
          <p>자기소개입니다.</p>
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

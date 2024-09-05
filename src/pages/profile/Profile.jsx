import React, { useEffect, useState } from "react";
import { getPostsByUser } from "../../api/postListApi";
import fetchUserData from "../../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import ImgViewField from "../../components/core/img-view-field/ImgViewField";
import Button from "../../components/core/button-field/ButtonField";
import styles from "./Profile.module.scss";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // 사용자 데이터 가져오기
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    getUserData();
  }, []);

  // 사용자 게시글 가져오기
  useEffect(() => {
    const fetchUserPosts = async () => {
      const posts = await getPostsByUser(0, 5, "createdAt,desc");
      setUserPosts(posts);
    };

    fetchUserPosts();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleViewAllClick = () => {
    navigate("/myposts");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      {isEditing ? (
        <EditProfile
          userData={userData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
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
              <Button
                label="수정하기"
                onClick={handleEditClick}
                isActive={true}
              />
            </div>
          </section>

          <section className={styles.postsSection}>
            <h4>내가 쓴 글 ({userPosts.length})</h4>
            <ul className={styles.postList}>
              {userPosts.map((post) => (
                <li key={post.id} className={styles.postItem}>
                  <span className={styles.category}>{post.category}</span>
                  <Link to={`/post/${post.id}`} className={styles.postTitle}>
                    {post.title}
                  </Link>
                  <span className={styles.postDate}>
                    {new Date(post.create_at).toLocaleDateString("ko-KR")}
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.buttonContainer}>
              <Button
                label="전체 조회"
                onClick={handleViewAllClick}
                isActive={true}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;

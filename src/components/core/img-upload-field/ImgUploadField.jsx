import React, { useRef } from 'react';
import styles from './ImgUploadField.module.scss';
import { Icon } from '..';

const ImgUploadField = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const ImgUploadClickHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  const handleImageChange = (event) => {
    const file = event?.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target.result); // Base64 데이터를 부모 컴포넌트로 전달
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleImageChange = (event) => {
  //   const file = event?.target.files[0];
  //   if (file) {
  //     onChange(file); // 파일 객체를 부모 컴포넌트로 전달
  //   }
  // };

  return (
    <div
      className={styles.container}
      onClick={ImgUploadClickHandler}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className={styles.fileInput}
      />
      <>
        <Icon type={'IconImage'} className={styles.icon} />
        <span>사진</span>
      </>
    </div>
  );
};

export default ImgUploadField;
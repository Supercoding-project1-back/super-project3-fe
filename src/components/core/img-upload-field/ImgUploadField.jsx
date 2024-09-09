import React, { useRef } from 'react';
import styles from './ImgUploadField.module.scss';
import { Icon } from '..';

const ImgUploadField = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      onChange(files);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
        className={styles.fileInput}
      />
      <div className={styles.uploadButton} onClick={() => fileInputRef.current.click()}>
        <Icon type={'IconUpload'} />
        <span>이미지 업로드</span>
      </div>
    </div>
  );
};

export default ImgUploadField;
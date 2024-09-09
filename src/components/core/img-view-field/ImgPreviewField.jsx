import React from 'react';
import styles from './ImgPreviewField.module.scss';
import { Icon } from '..';

const ImgPreviewField = ({ images, onRemove }) => {
  return (
    <ul className={styles.previewContainer}>
      {images.map((image, index) => (
        <li key={index} className={styles.previewWrap}>
          <div className={styles.icon}>
            <Icon type={'IconDelete'} onClick={() => onRemove(index)} />
          </div>
          <img src={image} alt={`미리보기 ${index + 1}`} className={styles.previewImg} />
        </li>
      ))}
    </ul>
  );
};

export default ImgPreviewField;
import React from 'react';
import * as icons from '../../../assets/icons';
import styles from './IconField.module.scss';

const IconField = ({
  type,
  className = '',
  onClick = () => { }
}) => {
  const IconComponent = icons[type];

  // 아이콘 type 에러처리
  if (!IconComponent) {
    console.error(`아이콘 type: ${type}이 존재하지 않습니다.`);
    return null;
  }

  return (
    <div className={styles.wrap} onClick={onClick}>
      <IconComponent className={`${styles.icon} ${className}`} />
    </div>
  );
};

export default IconField;
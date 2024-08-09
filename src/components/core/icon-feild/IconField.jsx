import React from 'react';
import * as icons from '../../../assets/icons';
import styles from './IconField.module.scss';

const IconField = ({ type, className }) => {
  const iconType = icons[type];
  // console.log(iconType);
  return (
    <div className={styles.wrap}>
      <img src={iconType} className={className} alt={type} />
    </div>
  );
}

export default IconField;
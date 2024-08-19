import React from 'react';
import * as icons from '../../../assets/icons';
import styles from './IconField.module.scss';

const IconField = ({
  type,
  className = '',
  onClick = () => { }
}) => {
  const iconType = icons[type];
  // console.log(iconType);
  return (
    <div className={styles.wrap} onClick={onClick}>
      <img src={iconType} className={className} alt={type} />
    </div>
  );
}

export default IconField;
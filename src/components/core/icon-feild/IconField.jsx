import React from 'react';
import * as icons from '../../../assets/icons';

const IconField = ({ type, className }) => {
  const iconType = icons[type];
  console.log(iconType);
  return (
    <div>
      <img src={iconType} className={className} alt={type} />
    </div>
  );
}

export default IconField;
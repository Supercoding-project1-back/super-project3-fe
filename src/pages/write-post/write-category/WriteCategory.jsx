import React, { useState } from 'react';
import styles from './WriteCategory.module.scss';
import { Button } from '../../../components/core'

const WriteCategory = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleClickCategory = () => {
    setActiveCategory('일상')
  }

  return (
    <>
      <Button
        label={'일상'}
        type={'일상'}
        isActive={activeCategory === '일상'}
        onClick={handleClickCategory}
      />
      <Button
        label={'질문'}
        type={'질문'}
      />
      <Button
        label={'구매'}
        type={'구매'}
      />
    </>
  );
};

export default WriteCategory;
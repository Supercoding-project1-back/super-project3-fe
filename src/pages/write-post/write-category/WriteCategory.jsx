import React, { useCallback, useContext, useState } from 'react';
import { Button } from '../../../components/core'
import { PostFormContext } from '../../../contexts/PostFormContext';

const WriteCategory = () => {
  // 선택된 카테고리 상태
  const [activeCategory, setActiveCategory] = useState(null);

  const { setCategory } = useContext(PostFormContext);
  const categories = ['일상글', '질문글', '구매글'];

  const handleClickCategory = useCallback((category) => {
    setActiveCategory(category);
    setCategory(category);
  }, [setCategory])

  return (
    <>
      {categories.map((category) => (
        <Button
          key={category}
          label={category}
          type={category}
          isActive={activeCategory === category}
          onClick={handleClickCategory}
        />
      ))}
    </>
  );
};

export default WriteCategory;
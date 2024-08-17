import React, { useState } from 'react';
import { Button } from '../../../components/core'

const WriteCategory = ({ handleChangeCatergory }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = ['일상', '질문', '구매'];

  const handleClickCategory = (category) => {
    setActiveCategory(category);
    handleChangeCatergory(category);
    // console.log(category);
  }

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
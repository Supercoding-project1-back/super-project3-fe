import React, { useState } from "react";
import { ButtonField as Button } from "../../components/core/button-field";
import styles from "./CategoryFilter.module.scss";

const CategoryFilter = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "전체", type: "all" },
    { label: "질문", type: "question" },
    { label: "일상", type: "daily" },
    { label: "구매", type: "purchase" },
  ];

  const handleCategoryClick = (type) => {
    setActiveCategory(type);
    onCategoryChange(type);
  };

  return (
    <div className={styles.categoryFilter}>
      {categories.map((category) => (
        <Button
          key={category.type}
          label={category.label}
          type={category.type}
          isActive={activeCategory === category.type}
          onClick={() => handleCategoryClick(category.type)}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;

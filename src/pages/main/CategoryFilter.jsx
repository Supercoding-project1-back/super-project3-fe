import React from "react";
import { Button } from "../../components/core/button-field";
import styles from "./CategoryFilter.module.scss";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categoryMapping = {
    전체: "전체글",
    질문: "질문글",
    일상: "일상글",
    구매: "구매글",
  };

  return (
    <div className={styles.categoryFilterContainer}>
      {Object.keys(categoryMapping).map((label) => (
        <Button
          key={label}
          label={label}
          type={categoryMapping[label]}
          onClick={() => onCategoryChange(categoryMapping[label])}
          isActive={selectedCategory === categoryMapping[label]}
          className={styles.categoryButton}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;

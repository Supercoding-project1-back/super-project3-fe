import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PopularPosts from "./PopularPosts";
import PostList from "./PostList";
import styles from "./Main.module.scss";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체글");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <CategoryFilter
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <PopularPosts selectedCategory={selectedCategory} />
      <PostList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Main;

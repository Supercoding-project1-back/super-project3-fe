import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PopularPosts from "./PopularPosts";
import PostList from "./PostList";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <PopularPosts selectedCategory={selectedCategory} />
      <PostList selectedCategory={selectedCategory} />
    </>
  );
};

export default Main;

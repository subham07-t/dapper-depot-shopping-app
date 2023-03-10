import React from "react";
import { categories } from "../data/categoriesData";
import { Container } from "../styles/components/Categories.styled";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

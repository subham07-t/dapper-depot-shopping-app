import React from "react";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "../styles/components/CategoryItem.styled";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

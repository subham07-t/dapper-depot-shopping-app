import { popularProducts } from "../data/productsData";
import { Container } from "../styles/components/Products.styled";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

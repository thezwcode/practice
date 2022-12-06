import { Container } from "./styles";
import Navbar from "../navbar";
import { MenuTypes } from "../navbar/styles";

const Shop: React.FC = () => {
  return (
    <>
      <Navbar menuType={MenuTypes.Page} />
      <Container>Shop</Container>
    </>
  );
};

export default Shop;

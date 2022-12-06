import { Container } from "./styles";
import Navbar from "../navbar";
import { MenuTypes } from "../navbar/styles";

const DUMMY_LINKS = [
  { name: "What is Link?", to: "/" },
  { name: "Link-enabled products", to: "/products" },
];

const LinkPage: React.FC = () => {
  return (
    <>
      <Navbar menuType={MenuTypes.Page} links={DUMMY_LINKS} />
      <Container>Link Page</Container>
    </>
  );
};

export default LinkPage;

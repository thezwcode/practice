import { Container } from "./styles";
import Navbar from "../navbar";
import { MenuTypes } from "../navbar/styles";

const Help: React.FC = () => {
  return (
    <>
      <Navbar menuType={MenuTypes.Page} />
      <Container>Help</Container>
    </>
  );
};

export default Help;

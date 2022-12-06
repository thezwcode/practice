import { Container } from "./styles";
import Navbar from "../navbar";
import { MenuTypes } from "../navbar/styles";

const PushPage: React.FC = () => {
  return (
    <>
      <Navbar menuType={MenuTypes.Page} />
      <Container>Push Page</Container>
    </>
  );
};

export default PushPage;

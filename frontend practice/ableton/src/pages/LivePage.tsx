import { Container } from "./styles";
import Navbar from "../navbar";
import { MenuTypes } from "../navbar/styles";
const LivePage: React.FC = () => {
  console.log("rendered");

  return (
    <>
      <Navbar menuType={MenuTypes.Page} />
      <Container>Live Page</Container>
    </>
  );
};

export default LivePage;

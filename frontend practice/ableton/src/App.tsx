import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { MenuTypes } from "./navbar/styles";
import GlobalStyles from "./styles/global";
import Navbar from "./navbar";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar menuType={MenuTypes.Main} />
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default App;

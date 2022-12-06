import { Container, MenuTypes } from "./styles";
import MainNavigation from "./MainNavigation";
import PageNavigation from "./PageNavigation";

function getMenuElement(menuType: string, links?: { name: string, to: string }[]) {
  switch (menuType) {
    case MenuTypes.Main:
      return (
        <Container>
          <MainNavigation />
        </Container>
      );
    case MenuTypes.Page:
      return (
        <Container borderTop={"solid 0.2em gray"} >
          <PageNavigation links={links}/>
        </Container>
      );
    default:
      return <Container>Loading...</Container>;
  }
}

const Navbar: React.FC<{ menuType: string, links?: { name: string, to: string }[] }> = (
  props
) => {
  const { menuType, links } = props;
  const menu = getMenuElement(menuType, links);

  return <>{menu}</>;
};

export default Navbar;

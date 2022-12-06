import abletonLogo from "../assets/ableton-logo.png";
import {
  Text,
  NavigationLink,
  NavMenu,
  NavList,
  NavListItem,
  Logo,
  Wrapper,
} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import MoreMenu from "./MoreMenu";

const MainNavigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Wrapper flexDirection="column">
      <NavMenu>
        <NavigationLink to="/">
          <Logo src={abletonLogo} />
        </NavigationLink>
        <NavList>
          <NavListItem>
            <NavigationLink to="/live">
              <Text>Live</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem>
            <NavigationLink to="/push">
              <Text>Push</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem>
            <NavigationLink to="/link">
              <Text>Link</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem>
            <NavigationLink to="/shop">
              <Text>Shop</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem>
            <NavigationLink to="/packs">
              <Text>Packs</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem>
            <NavigationLink to="/help">
              <Text>Help</Text>
            </NavigationLink>
          </NavListItem>
          <NavListItem onClick={showMenuHandler}>
            <Text>More</Text>
            {!showMenu && <AddIcon fontSize="small" />}
            {showMenu && <RemoveIcon  fontSize="small"/>}
          </NavListItem>
        </NavList>
      </NavMenu>
      {showMenu && <MoreMenu />}
    </Wrapper>
  );
};

export default MainNavigation;

import { NavigationLink, NavListItem, Text } from "./styles";

interface NavItem {
  name: string;
  to: string;
}

const PageNavigationItem: React.FC<NavItem> = ({ name, to }) => {
  return (
    <>
      <NavListItem>
        <NavigationLink to={to}>
          <Text>{name}</Text>
        </NavigationLink>
      </NavListItem>
    </>
  );
};

export default PageNavigationItem;

import styled from "styled-components";

import { PageText as NavText } from "../helpers/PageText";
import {
  PageItemWrapper as NavItemWrapper,
  iPageItemProps,
} from "../helpers/ItemWrapper";
import { NavLink } from "react-router-dom";

export enum MenuTypes {
  Page = "page",
  Main = "main",
}

export const Logo = styled.img`
  padding: 0.2em 0.2em;
  margin-left: 0.5em;
  cursor: pointer;
`;

export const Container = styled(NavItemWrapper)`
  display: flex;
  align-items: center;
  border-top: ${(props) => (props.borderTop ? props.borderTop : "none")};
`;
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;
export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
  cursor: pointer;
`;

export const Text = styled(NavText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  padding: ${(props) => (props.padding ? props.padding : "0.1em")};
  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
  &.active {
    color: orange;
  }
`;

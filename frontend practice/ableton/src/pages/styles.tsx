import styled from "styled-components";

import { PageText as LayoutText } from "../helpers/PageText";
import { PageItemWrapper as LayoutItemWrapper } from "../helpers/ItemWrapper";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  padding: 1em;
  margin: 1em;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
`;

export const Text = styled(LayoutText)`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
`;

export const Wrapper = styled(LayoutItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};

  @media (max-width: 850px) {
    display: none;
  }
`;

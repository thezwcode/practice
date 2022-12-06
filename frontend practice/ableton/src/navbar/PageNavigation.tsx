import { GetPageMenuList } from "../api/api";
import useHttp from "../hooks/use-http";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageNavigationItem from "./PageNavigationItem";
import { NavList } from "./styles";

const PageNavigation: React.FC<{ links?: { name: string; to: string }[] }> = (
  props
) => {
  const { links } = props;
  const location = useLocation();
  // const { sendRequest, error, data: pageMenuList } = useHttp(GetPageMenuList);
  // const pageName = location.pathname.split("/").pop();
  // useEffect(() => {
  //   sendRequest(pageName);
  // }, [sendRequest]);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (!pageMenuList || pageMenuList.length === 0) {
  //   return <div style={{ color: "red" }}>Menu List Empty!</div>;
  // }
  return (
    <NavList>
      {links?.map((item: any) => {
        return <PageNavigationItem name={item.name} to={item.to} />;
      })}
    </NavList>
  );
};

export default PageNavigation;

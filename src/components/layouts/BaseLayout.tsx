import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";
import FullHeightScreen from "../base/FullHeightScreen";

const BaseLayout = () => {
  return (
    <FullHeightScreen>
      <Navigation style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/suspense"}>Suspense</Link>
      </Navigation>
      <Content>
        <Outlet />
      </Content>
    </FullHeightScreen>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 80px;
  width: 100%;
  background-color: #ccc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  overflow-x: hidden;
`;

export default BaseLayout;

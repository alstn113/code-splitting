import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

// full height를 뺄 경우 스크롤이 저장됨.

const Layout = () => {
  return (
    <>
      <Navigation style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/post"}>post</Link>
      </Navigation>
      <Outlet />
    </>
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

export default Layout;

import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";
import FullHeightScreen from "../base/FullHeightScreen";
import { Suspense } from "react";
import PageSuspense from "../PageSuspense/PageSuspense";

// 이거는 content안에 스크롤 돌리는 것
// 이것 같은 경우는 이전 페이지로 돌아가면 스크롤이 다시 올라감

const BaseLayout = () => {
  return (
    <FullHeightScreen>
      <Navigation style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/post"}>post</Link>
      </Navigation>
      <Content>
        {/* Page Suspense */}
        <Suspense>
          <PageSuspense>
            <Outlet />
          </PageSuspense>
        </Suspense>
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

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;

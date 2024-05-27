import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>
        <header>
          <NavLink to={"/"}>ContactHub</NavLink>
          <NavLink to={"contacts"}>Contacts</NavLink>
          <NavLink to={"register"}>Sign Up</NavLink>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default SharedLayout;

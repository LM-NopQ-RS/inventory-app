import React from "react";
import { Outlet, useNavigate } from "react-router";
import SideNav from "../components/SideNav";

const HomePage = () => {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
};

export default HomePage;

import React, { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import SideNav from "../components/SideNav";

//creating the context to store the searchText state
const SearchContext = createContext();

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      {/* wrapping components inside searchcontext provider */}
      <SearchContext.Provider value={{ searchText, setSearchText }}>
        <SideNav />
        <Outlet />
      </SearchContext.Provider>
    </>
  );
};

export { HomePage, SearchContext };

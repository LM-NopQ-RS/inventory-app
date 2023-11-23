import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import logo from "./SideNavIcons/home.svg";
import { SearchContext } from "../pages/HomePage";

function SideNav() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  //searchText and setSearchText imported from SearchContext
  const { searchText, setSearchText } = useContext(SearchContext);

  function searchFn(e) {
    setSearchText(e.target.value);
  }

  async function getItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    items.map((value) => {
      if (value.name.toLowerCase().includes(search.toLowerCase())) {
        console.log(value);
      }
    });
    setSearch("");
  }

  const navStyleTop = {
    backgroundColor: "#985df5",
    height: "50%",
    padding: "20px",
    display: "flex",
    borderBottomStyle: "solid",
    borderColor: "#fff1f8",
    borderWidth: "5px",
  };
  const navStyleBottom = {
    backgroundColor: "#985df5",
    padding: "20px",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingRight: "10px",
    paddingLeft: "10px",
  };
  const buttonTextStyle = {
    borderStyle: "none",
    color: "#FFF5FA",
    backgroundColor: "transparent",
    width: "50%",
  };
  const searchStyle = {
    backgroundColor: "#FFF5FA",
    borderStyle: "none",
    height: "30px",
    width: "150px",
    borderRadius: "5px",
  };
  const buttonStyle = {
    borderStyle: "none",
    backgroundColor: "#FFF5FA",
    height: "70px",
    width: "70px",
    borderRadius: "10px",
    marginLeft: "2px",
  };
  const imgStyle = {
    borderStyle: "none",
    backgroundColor: "#FFF5FA",
    height: "70px",
    width: "70px",
    borderRadius: "10px",
    marginLeft: "2px",
  };
  const buttonContainer = {
    borderStyle: "none",
    height: "25%",
    backgroundColor: "transparent",
    alignItems: "space-between",
    display: "flex",
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#985df5",
        float: "right",
        width: "13%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div style={navStyleTop}>
        <form
          style={{ backgroundColor: "transparent" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            style={searchStyle}
            id="search-input"
            type="text"
            placeholder="search:"
            value={searchText}
            onChange={(event) => searchFn(event)}
          />
        </form>
      </div>
      <div style={navStyleBottom}>
        <div style={buttonContainer}>
          <div style={buttonTextStyle}>home:</div>{" "}
          <button style={buttonStyle} onClick={() => navigate("/home")}>
            home
          </button>
        </div>
        <div style={buttonContainer}>
          <div style={buttonTextStyle}>profile: </div>{" "}
          <button style={buttonStyle}>profile</button>
        </div>
        <div style={buttonContainer}>
          <div style={buttonTextStyle}>settings: </div>{" "}
          <button style={buttonStyle}>settings</button>
        </div>

        <div style={buttonContainer}>
          <div style={buttonTextStyle}>logout: </div>
          <button style={buttonStyle} onClick={() => navigate("/")}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

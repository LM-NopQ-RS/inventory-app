import React, { useContext, useEffect, useState } from "react";
import apiURL from "../api";
import Item from "../components/Item";
import AddForm from "../components/AddForm";
import AddButton from "../components/AddButton";
import { SearchContext } from "./HomePage";

function DashBoard() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  //importing the searchText from SearchContext
  const { searchText } = useContext(SearchContext);

  async function getItems() {
    const res = await fetch(`${apiURL}/items`);
    const data = await res.json();

    //search functionality
    if (searchText !== "") {
      const searchData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setItems(searchData);
    } else {
      setItems(data);
    }
  }

  useEffect(() => {
    getItems();
  }, [searchText]);

  return (
    <>
      {isOpen && <AddForm setIsOpen={setIsOpen} getItems={getItems} />}

      <button className="add-item-button" onClick={() => setIsOpen(true)}>
        <AddButton />
      </button>

      <div className="items-container">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
}

export default DashBoard;

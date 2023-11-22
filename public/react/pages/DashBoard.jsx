import React, { useEffect, useState } from "react";
import apiURL from "../api";
import Item from "../components/Item";
import AddForm from "../components/AddForm";
import AddButton from "../components/AddButton";

function DashBoard() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getItems() {
    const res = await fetch(`${apiURL}/items`);
    const data = await res.json();
    setItems(data);
  }

  useEffect(() => {
    getItems();
  }, []);

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

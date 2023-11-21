import React, { useEffect, useState } from "react";
import apiURL from "../api";
import Item from "../components/Item";

function DashBoard() {
  const [items, setItems] = useState([]);

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
      <div className="items-container">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
}

export default DashBoard;

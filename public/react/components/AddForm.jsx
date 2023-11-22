import React, { useState } from "react";
import CloseButton from "./CloseButton";
import apiURL from "../api";

const AddForm = ({ setIsOpen, getItems }) => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  async function handlePost(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      await getItems();
      setIsOpen(false);
      //logging the updated item
      console.log(await res.json());
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <div className="backdrop">
      <div className="form-container">
        <div
          className="close-button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <CloseButton />
        </div>
        <form className="form">
          <div className="form-input">
            <input
              type="text"
              placeholder="Name..."
              required
              name="name"
              value={item.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Description..."
              required
              name="description"
              value={item.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Price..."
              required
              name="price"
              value={item.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Category..."
              required
              name="category"
              value={item.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Image..."
              required
              name="image"
              value={item.image}
              onChange={handleInputChange}
            />
          </div>
          <button className="submit-button" onClick={handlePost}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;

import React, { useState } from "react";
import CloseButton from "./CloseButton";
import apiURL from "../api";

const UpdateForm = ({ updatingItem, setIsOpen, getItems }) => {
  const [item, setItem] = useState({
    name: updatingItem?.name,
    description: updatingItem?.description,
    price: updatingItem?.price,
    category: updatingItem?.category,
    image: updatingItem?.image,
  });

  const handleInputChange = (e) => {
    setItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/items/${updatingItem?.id}`, {
        method: "PUT",
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
              defaultValue={updatingItem?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Description..."
              required
              name="description"
              defaultValue={updatingItem?.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Price..."
              required
              name="price"
              defaultValue={updatingItem?.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Category..."
              required
              name="category"
              defaultValue={updatingItem?.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Image..."
              required
              name="image"
              defaultValue={updatingItem?.image}
              onChange={handleInputChange}
            />
          </div>
          <button className="submit-button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;

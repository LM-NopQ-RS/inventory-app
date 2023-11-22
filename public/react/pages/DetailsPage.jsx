import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiURL from "../api";

function DetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${id}`);
        const itemData = await response.json();
        setItem(itemData);
      } catch (err) {
        console.error(err);
      }
    };

    getItem();
  }, [id]);

  return (
    <div className="details-container">
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        BACK
      </button>
      <section className="created-details">
        <div>
          <h3>Created on:</h3>
          <p>{item.createdOn}</p>
        </div>
        <div>
          <h3>By User:</h3>
          <p>{item.createdBy}</p>
        </div>
      </section>
      <div className="item-details-content">
        <div className="item-details">
          <div className="item-details-text">
            <h2>Name: {item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
          </div>
          <img src={item.image} alt={item.name} />
        </div>
        <div className="button-container">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

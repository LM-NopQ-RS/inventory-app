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
        console.log(itemData);
      } catch (err) {
        console.error(err);
      }
    };

    getItem();
  }, [id]);

  return (
    <div className="details-container">
      <div className="top-button-container">
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Back
        </button>
      </div>
      <section className="created-details">
        <div className="created-item-container">
          <h3>Created on:</h3>
          <p>{item.createdAt}</p>
        </div>
        <div className="created-item-container">
          <h3>By User:</h3>
          <p>Lois Clinton placeholder</p>
        </div>
      </section>
      <div className="item-details-content">
        <div className="item-details">
          <div className="item-details-text">
            <h2>{item.name}</h2>
            <p>
              <b className="background-grey font-russo">Price:</b> {item.price}
            </p>
            <p>
              <b className="background-grey font-russo">Category:</b>{" "}
              {item.category}
            </p>
            <p>
              {" "}
              <b className="background-grey font-russo">Description:</b>{" "}
              {item.description}
            </p>
          </div>
          <img src={item.image} alt={item.name} />
        </div>
        <div className="button-container">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

import React from "react";
import { useLocation, useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleClick() {
    navigate(`${pathname}/${item?.id}`);
  }

  return (
    <div className="item">
      <div className="image-container">
        <img src={item.image} alt="image" width={"100px"} height={"100px"} />
      </div>
      <div className="info">
        <section className="name_and_category">
          <h3>{item.name}</h3>
          <h5>{item.category}</h5>
        </section>
        <button onClick={handleClick}>View details</button>
      </div>
    </div>
  );
}

export default Item;

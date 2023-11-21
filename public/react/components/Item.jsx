import React from "react";

function Item({ item }) {
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
        <button>View details</button>
      </div>
    </div>
  );
}

export default Item;

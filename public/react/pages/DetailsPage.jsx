import React from "react";

function DetailsPage() {
  return (
    <>
      <button>BACK</button>
      <section className="created-details">
        <div>
          <h3>Created on:</h3>
          <p>this date</p>
        </div>
        <div>
          <h3>By User:</h3>
          <p>this user</p>
        </div>
      </section>
      <section className="item-details-content">
        <h2>Name: {"item name"}</h2>
        <p>Price: {"item price"}</p>
        <p>Description: {"item description"}</p>
        <p>Category: {"item category"}</p>
        <img>{"item image"}</img>
      </section>
    </>
  );
}

export default DetailsPage;

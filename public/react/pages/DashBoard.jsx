import React, { useEffect, useState } from "react";
import apiURL from "../api";

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
      <div
        className="items-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "40px",
        }}
      >
        {items.map((item) => (
          <div
            className="item"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "600px",
              margin: "20px",
              padding: "30px",
              backgroundColor: "FFF5FA",
              borderRadius: "8px",
              boxShadow: "3px 3px 8px #787878",
            }}
          >
            <img
              src={item.image}
              alt="image"
              width={"100px"}
              height={"100px"}
              style={{
                borderRadius: "50%",
              }}
            />
            <div
              className="info"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingLeft: "30px",
              }}
            >
              <section
                className="name_and_category"
                style={{ paddingBottom: "14px" }}
              >
                <h3 style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                  {item.name}
                </h3>
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                >
                  {item.category}
                </h5>
              </section>
              <button
                style={{
                  position: "absolute",
                  bottom: "6px",
                  right: "6px",
                  fontFamily: "sans-serif",
                  backgroundColor: "#985df5",
                  border: "none",
                  color: "#FFF5FA",
                  fontSize: "14px",
                  fontWeight: "normal",
                  width: "140px",
                  height: "35px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DashBoard;

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Decorative" }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Collection</h2>

      {plants.map((plant) => (
        <div
          key={plant.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>

          <button
            onClick={() =>
              dispatch(addItem({ ...plant, quantity: 1 }))
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

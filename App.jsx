import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  if (start) {
    return <ProductList />;
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "150px" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to your one stop plant shop</p>

      <button
        onClick={() => setStart(true)}
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;

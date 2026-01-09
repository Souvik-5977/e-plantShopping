import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // Sample plants array (already present in your file as per task)
  const plantsArray = [
    {
      category: "Indoor",
      name: "Snake Plant",
      image: "https://via.placeholder.com/150",
      description: "Low maintenance indoor plant",
      cost: 299,
    },
    {
      category: "Outdoor",
      name: "Rose Plant",
      image: "https://via.placeholder.com/150",
      description: "Beautiful flowering plant",
      cost: 199,
    },
  ];

  // State to track added products
  const [addedToCart, setAddedToCart] = useState({});

  // Add to cart handler
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div className="product-card" key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>₹{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

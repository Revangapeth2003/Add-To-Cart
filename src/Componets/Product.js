import React from "react";

const Product = ({ ele, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, ele]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== ele.id));
  };

  const isInCart = cart.some((c) => c.id === ele.id); // More efficient cart lookup

  return (
    <div className="product">
      <img
        src={ele.image}
        alt={ele.name}
        className="w-56 h-56 object-cover"
        // onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Fallback image
      />
      <h2 className="font-semibold text-xl">{ele.name}</h2>
      <p className="text-lg text-gray-700">₹{ele.price}</p>
      <button
        className={`px-4 py-2 rounded-lg ${
          isInCart ? "bg-yellow-400 text-black" : "bg-red-400 text-white"
        }`}
        onClick={isInCart ? removeCart : addCart}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;

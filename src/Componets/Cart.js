import React from "react";
const Cart = ({ cart, setCart }) => {
  // Calculate total amount directly in render
  const total = cart.reduce((sum, ele) => sum + ele.price, 0);
  const remove = (id) => {
    const removeCart = cart.filter((c) => c.id !== id);
    setCart(removeCart);
  };
  return (
    <div className="container grid grid-cols-3 gap-4 ">
      <h1 className="font-extrabold text-center p-2">This is cart component</h1>
      {cart.map((ele) => (
        <div key={ele.id}>
          <div className="w-40 h-40 ">
            <img src={ele.image} alt={ele.name} />
          </div>
          <div>
            <h3>{ele.name}</h3>
            <p>Product Price: Rs. {ele.price}</p>
          </div>
          <button
            className="bg-yellow-400 text-black px-4 py-2"
            onClick={() => {
              remove(ele.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <h1 className="font-extrabold ml-24">Total Amount: Rs. {total}</h1>
    </div>
  );
};

export default Cart;

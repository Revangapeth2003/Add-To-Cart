import React from "react";

const Cart = ({ cart }) => {
  // Calculate total amount directly in render
  const total = cart.reduce((sum, ele) => sum + ele.price, 0);

  return (
    <div className="px-10 grid grid-cols-2">
      <h1 className="font-extrabold text-center p-2">This is cart component</h1>
      {cart.map((ele) => (
        <div key={ele.id}>
          <div className="w-40 h-40 ">
            <img src={ele.image} alt="" />
          </div>
          <div>
            <h3>{ele.name}</h3>
            <p>Product Price: Rs. {ele.price}</p>
          </div>
        </div>
      ))}
      <h1 className="font-extrabold">Total Amount: Rs. {total}</h1>
    </div>
  );
};

export default Cart;

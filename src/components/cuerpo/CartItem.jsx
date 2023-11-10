import React from "react";

const CartItem = ({ item, addToCart, restToCart, removeItem }) => {
  return (

    <tr className="cart-card">
        <td>{item.producto}</td>
      <td className="text-center">
        
        {item.cantidad}
        
      </td>
      <td>${parseInt(item.precio.replace(/\./g, "")).toFixed(2)}</td>
      <td>${(parseInt(item.precio.replace(/\./g, "")) * item.cantidad).toFixed(2)}</td>
      <td>
      <button className="text-center mx-2 btn  "  onClick={() => restToCart(item)}><h1 className="text-center">-</h1> </button>
      <button className="text-center mx-2 btn" onClick={() => addToCart(item,1)}><h1 className="text-center">+</h1></button>
      <button className="text-center mx-2 btn-pop" onClick={() => removeItem(item)}><h1 className="text-center">x</h1></button>
      </td>
    </tr>
    
    
  );
};

export default CartItem;




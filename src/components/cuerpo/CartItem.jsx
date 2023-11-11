import React from "react";

const CartItem = ({ item, addToCart, restToCart, removeItem }) => {
  return (

    <tr className="cart-card text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1">
        <td>{item.producto}</td>
      <td className="text-center text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1">
        
        {item.cantidad}
        
      </td>
      <td className="text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1" >${parseInt(item.precio.replace(/\./g, "")).toFixed(2)}</td>
      <td >${(parseInt(item.precio.replace(/\./g, "")) * item.cantidad).toFixed(2)}</td>
      <td>
      <button className="btn-add"  onClick={() => restToCart(item)}><h1 >-</h1> </button>
      <button className="btn-add" onClick={() => addToCart(item,1)}><h1 >+</h1></button>
      <button className="btn-pop" onClick={() => removeItem(item)}><h1 >x</h1></button>
      </td>
    </tr>
    
    
  );
};

export default CartItem;




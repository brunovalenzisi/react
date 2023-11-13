import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartProvider";
import { useEffect, useState } from "react";

const CartWidget = () => {
  const cartContext = useCartContext();
  const { cart } = cartContext;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.cantidad, 0);
    cart.length > 0 && setCount(total);
  }, [cart]);

  return (
    <Link to={"/cart"}>
      <div className="w-fit flex justify-center items-center">
        <h1 className="text-black text-2xl m-1">{count}</h1>

        <h1 className="text-2xl">🛒</h1>
      </div>
    </Link>
  );
};

export default CartWidget;

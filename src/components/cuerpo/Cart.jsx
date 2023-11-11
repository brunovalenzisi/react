import React from "react";
import { useCartContext } from "../../CartProvider";
import CartItem from "./CartItem"; // Importa el componente CartItem
import { Link } from "react-router-dom";



const Cart = () => {
  const cartContext = useCartContext();
  const { cart, addToCart, restToCart, removeItem, clearCart } = cartContext;

  // Función para calcular el precio total
  const precioTotal = () => {
    return cart.reduce(
      (total, item) => total + item.precio.replace(/\./g, "") * item.cantidad,
      0
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl font-bold mb-2">Resumen del Carrito</h1>
      {cart.length === 0 ? ( 
        <div>
          <p>El carrito está vacío.</p>
          <Link to={'/'}><button className="btn">Seguir comprando</button> </Link>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1">Producto</th>
              <th className="text-left text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1 ">Cantidad</th>
              <th className="text-left text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1 ">Precio Unitario</th>
              <th className="text-left text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1 ">Subtotal</th>
              <th className="text-left text-xs sm:text-xs md:text-s lg:text-xl xl:text-xl px-1 "></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                addToCart={addToCart}
                removeItem={removeItem}
                restToCart={restToCart}
                clearCart={clearCart}
              />
            ))}
          </tbody>
        </table>
      )}

      {cart.length > 0 && ( // Verifica si el carrito no está vacío
        <div>
          <h2 className="text-xl font-bold mt-4">
            Precio Total: ${precioTotal().toFixed(2)}
          </h2>
          <div className="mt-4">
            <button className="btn" onClick={() => clearCart()}>
              Limpiar Carrito
            </button>
            <Link to='/cart/checkout'>
            {cart.length>=0 && <button className="btn">Finalizar Compra</button>}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState, useContext, useEffect } from "react";

const cartContext = React.createContext();

export function useCartContext() {
  return useContext(cartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {}, [cart]);

  const addToCart = (producto, cant) => {
    const carrito = [...cart];
    const productoNuevo = carrito.find((item) => item.id === producto.id);
    if (productoNuevo) {
      productoNuevo.cantidad += cant;
      setCart(carrito);
    } else {
      setCart([...cart, { ...producto, cantidad: cant }]);
    }
  };
  const restToCart = (producto) => {
    const carrito = [...cart];
    const productoNuevo = carrito.find((item) => item.id === producto.id);
    productoNuevo.cantidad--;
    productoNuevo.cantidad == 0 && carrito.pop(productoNuevo);
    setCart(carrito);
  };

  const removeItem = (producto) => {
    const carrito = [...cart];
    const productoNuevo = carrito.find((item) => item.id === producto.id);
    carrito.pop(productoNuevo);
    setCart(carrito);
  };
  const clearCart = (producto) => {
    setCart([]);
  };
  return (
    <cartContext.Provider
      value={{ cart, addToCart, restToCart, removeItem, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

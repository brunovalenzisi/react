import React from "react";

const Brief = ({ cart }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Detalle de la compra</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <p className="underline">
            {item.cantidad} x {item.producto}{" "}
          </p>
        </div>
      ))}
      <p className="font-bold">
        Total: $
        {cart
          .reduce(
            (total, item) =>
              total + item.precio.replace(/\./g, "") * item.cantidad,
            0
          )
          .toFixed(2)}
      </p>
    </div>
  );
};

export default Brief;

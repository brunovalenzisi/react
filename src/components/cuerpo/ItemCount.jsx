import { useState } from "react";

const ItemCount = (props) => {
  const stock = props.stock;
  const initial = props.initial;
  const onAdd = props.onAdd;
  const encargados = props.encargados;

  const [count, setCount] = useState(stock > 0 ? initial : 0);
  const handleCount = (e) => {
    const accion = e.target.id;
    if (accion == "+") {
      count + 1 <= stock && setCount(count + 1);
    } else if (accion == "-") {
      count >= 2 && setCount(count - 1);
    }
  };

  return (
    <>
      <div className=" w-full flex">
        <button
          id="-"
          onClick={(e) => {
            handleCount(e);
          }}
          className="btn"
        >
          -
        </button>
        <h1 className="text-center text-3xl mx-4 w-8">{count}</h1>
        <button
          id="+"
          onClick={(e) => {
            handleCount(e);
          }}
          className="btn"
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          onAdd(count);
        }}
        className="btn"
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;

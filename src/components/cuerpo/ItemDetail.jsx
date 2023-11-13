import React from "react";
import Slider from "react-slick";
import ItemCount from "./ItemCount";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartContext } from "../../CartProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = (props) => {
  const {
    producto,
    categoria,
    genero,
    subCategoria,
    imagenURL,
    precio,
    stock,
    descripcion,
    id,
  } = props.data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const cartContext = useCartContext();
  const { cart, addToCart } = cartContext;
  const [onCart, setOnCart] = useState(false);

  function getDisponibles() {
    const producto = cart.find((item) => item.id == id);
    return producto ? stock - producto.cantidad : stock;
  }

  function onAdd(cant) {
    const producto = { ...props.data };
    addToCart(producto, cant);
    setOnCart(true);
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <div className="text-2xl font-bold mb-2">{producto}</div>
        <nav className="text-sm font-medium" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                to={"/category/" + genero}
                className="text-yellow-600 hover:underline"
              >
                {genero}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to={"/category/" + genero + "/" + categoria}
                className="text-yellow-600 hover:underline"
              >
                {categoria}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-500">
              <Link
                to={
                  "/category/" + genero + "/" + categoria + "/" + subCategoria
                }
              >
                {subCategoria}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <Slider className="w-3/5" {...settings}>
        {imagenURL.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt="Not Found" className="w-full" />
          </div>
        ))}
      </Slider>
      <div className="px-6 py-10">
        <div className="text-l mb-2">{descripcion}</div>
        <p className="text-gray-700 text-3xl ">${precio}</p>
        <h6 className="text-sm">Disponibles:{getDisponibles()}</h6>
      </div>
      <div className="px-6 py-4"></div>
      {!onCart && (
        <ItemCount initial={1} stock={getDisponibles()} onAdd={onAdd} />
      )}
      <Link to="/cart">
        <button className="btn">Ver carrito</button>
      </Link>
    </div>
  );
};

export default ItemDetail;

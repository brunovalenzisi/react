import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const endPoint = location.pathname;
  const showCart = endPoint != "/cart" && endPoint != "/cart/checkout";

  return (
    <>
      <div className="flex   relative">
        <nav className="flex flex-wrap w-screen   justify-center items-center">
          <ul>
            <li className="inline-flex py-1 px-5 text-black font-semibold hover:underline ">
              <NavLink to={"category/Hombre"}>Hombre</NavLink>
            </li>
            <li className="inline-flex py-1 px-5 text-black font-semibold hover:underline ">
              <NavLink to={"category/Mujer"}>Mujer</NavLink>
            </li>
            <li className="inline-flex py-1 px-5 text-black font-semibold hover:underline ">
              <NavLink to={"category/Calzado"}>Calzado</NavLink>
            </li>
            <li className="inline-flex py-1 px-5 text-black font-semibold hover:underline ">
              <NavLink to={"category/Accesorios"}>Accesorios</NavLink>
            </li>
          </ul>
        </nav>
        <div className="px-3">{showCart && <CartWidget />}</div>
      </div>
    </>
  );
};

export default NavBar;

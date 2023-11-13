import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-center py-1 bg-black">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">Moovete</h1>
        </Link>
      </div>
      <NavBar />
    </>
  );
};

export default Header;

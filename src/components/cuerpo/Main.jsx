import { Routes, Route } from "react-router-dom";
import IntemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<IntemListContainer />} />
      <Route path="/category/:id" element={<IntemListContainer />} />
      <Route
        path="/category/:genero/:cat/:subcat"
        element={<IntemListContainer />}
      />
      <Route path="/category/:genero/:cat" element={<IntemListContainer />} />
      <Route path="/category/:genero" element={<IntemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default Main;

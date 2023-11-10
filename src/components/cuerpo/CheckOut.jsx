import React, { useState } from "react";
import { enviarOrden } from "../../utils";
import { useCartContext } from "../../CartProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const cartContext = useCartContext();
  const { cart, clearCart } = cartContext;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    
    if (cart.length == 0) {
      toast.warning("Tu carrito esta vacio",{hideProgressBar: true});
    } else if (email && phone && name) {
      const user = { email: email, telefono: phone, nombre: name };
        toast.promise(enviarOrden(user, cart, clearCart), {
        pending: "Por Favor espera mientras verificamos los datos",
        success: "Operacion exitosa! Disfruta de tu compra👌",
        error: "Hubo un error, no se pudo completar la compra🤯",
        hideProgressBar: true,
        autoClose: 5000
      }).then(()=>{toast("Gracias por su compra! sera redirigido al inicio")
                   setTimeout(()=>{window.location.href = "/"},3000)   
    });
    } else {
      toast.error("Debes completar todos los campos"),{hideProgressBar: true};
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl p-5 text-gray-700 font-bold">
        Total: $
        {cart.reduce((total, item) => total + item.precio.replace(/\./g, "") * item.cantidad, 0).toFixed(2)}
      </h1>

      <div className="w-full max-w-xs  ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="block  text-gray-700 text-xl font-bold mb-2">
            Nombre Completo
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            ></input>
          </label>

          <label className="block text-gray-700 text-xl font-bold mb-2">
            Telefono
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
            ></input>
          </label>

          <label className="block text-gray-700 text-xl font-bold mb-2">
            email
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
            ></input>
          </label>

          <div className="flex items-center justify-between">
            <button onClick={handleSubmit} className="btn" type="button">
              Confirmar compra
            </button>
          </div>
        </form>
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
        />
      </div>
    </div>
  );
};

export default CheckOut;

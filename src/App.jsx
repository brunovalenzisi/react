
import Header from "./components/encabezado/Header";
import Main from "./components/cuerpo/Main";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartProvider";



function App(){
  return (
    <BrowserRouter>
      <CartProvider>
        <div className=" pb-5 relative top-0 left-0 right-0">
            <Header />
            <Main />
          </div>
      </CartProvider>
</BrowserRouter>
  );
  
}


export default App;

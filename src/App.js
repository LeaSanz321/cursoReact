import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos"/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkoutForm" element={<checkoutForm/>}/>
            <Route path="*" element={<h4>Ups, Not Found</h4>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;

//<NavBar/>
//<ItemListContainer greeting="Bienvenidos..."/>
//<ItemDetailContainer/>
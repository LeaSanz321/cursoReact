import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        </Routes>

        
      </BrowserRouter>

  );
}


export default App;

//<NavBar/>
//<ItemListContainer greeting="Bienvenidos..."/>
//<ItemDetailContainer/>
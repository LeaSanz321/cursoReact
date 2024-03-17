import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, quantity) => {
      const itemAgregado = {...item, cantidad:quantity};
  
      const newCarrito = [...cart];
      const estaEnElCarrito = newCarrito.find((prod) => prod.id === itemAgregado.id)
  
      if(estaEnElCarrito){
        estaEnElCarrito.cantidad += quantity;
      }else{
        newCarrito.push(itemAgregado);
      }
  
      setCart(newCarrito);
    }
  
    const cantidadEnCarrito = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    const precioTotal = () => {
      return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }
  
    const vaciarCarrito = () => {
      setCart([]);
    }
  

    return(
        <CartContext.Provider value={{cart, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
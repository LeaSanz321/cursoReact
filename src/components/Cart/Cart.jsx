import "./Cart.css";
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="cartContainer">
        <h1>Carrito:</h1>
        {cart.map(prod => (
            <div key={prod.id} className="prodCartContainer">
                <h3>{prod.name}</h3>
                <p>Precio unit: ${prod.price}</p>
                <p>Precio total: ${prod.price * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
            </div>
        ))}




        {cart.length > 0 ?
            <div className='carritoConProductos'>
                <h2>Total a pagar: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar carrito</button>
                <Link to="/checkout">Finalizar Compra</Link>
            </div> :
            <h2 className='carritoVacio'>El carrito está vacío.</h2>
        }   
    </div>
  )
}

export default Cart
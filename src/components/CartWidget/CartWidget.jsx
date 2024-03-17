import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

  return (
    <div>
        <Link to="/carrito"><i class="fa-solid fa-cart-shopping"></i><span> {cantidadEnCarrito()} </span></Link>
    </div>
  )
}

export default CartWidget
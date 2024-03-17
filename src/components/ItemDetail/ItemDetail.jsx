import React, { useContext, useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
  const [quantity, setQuantity] = useState(1);
  const {cart, agregarAlCarrito} = useContext(CartContext);
  console.log(cart)


    const handleSumar = () => {
        quantity < item.stock && setQuantity(quantity + 1)
    }
    const handleRestar = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    

  return (
    <div className='containerProd'>
            <img src={item.img} alt={item.name}></img>
            <div className='prodDetalles'>
                <h3>{item.name}</h3>
                <p>Categoría: {item.category} </p>
                <p>Precio:<span> ${item.price}</span></p>
                <ItemCount quantity={quantity} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => { agregarAlCarrito(item, quantity) }}/>
            </div>
    </div>
  )
}

export default ItemDetail
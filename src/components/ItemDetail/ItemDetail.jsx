import React, { useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  const [quantity, setQuantity] = useState(1);

    const handleSumar = () => {
        quantity < item.stock && setQuantity(quantity + 1)
    }
    const handleRestar = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    const handleAgregar = () => {
        console.log({...item, cantidad:quantity})
    }

  return (
    <div className='containerProd'>
            <img src={item.img} alt={item.name}></img>
            <div className='prodDetalles'>
                <h3>{item.name}</h3>
                <p>Categoría: {item.category} </p>
                <p>Precio:<span> ${item.price}</span></p>
                <ItemCount quantity={quantity} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
    </div>
  )
}

export default ItemDetail
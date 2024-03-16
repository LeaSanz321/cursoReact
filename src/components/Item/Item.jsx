import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ( {producto} ) => {
  return (
    <div className='prodContainer'>
        <img src={producto.img} alt={producto.name}></img>
        <div className='prodDetalles'>
            <h4>{producto.name}</h4>
            <p>Precio:<span> ${producto.price}</span></p>
            <p>Categ: {producto.category}</p>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item;
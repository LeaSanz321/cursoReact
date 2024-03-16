import "./ItemCount.css";

const ItemCount = ({quantity, handleRestar, handleSumar, handleAgregar}) => {

   
    
  return (
    <div className='containerCount'>
        <div className='buttons'>
            <button onClick={handleRestar}>-</button>
            <p>{quantity}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregarButton' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
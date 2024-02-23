import "./ItemCount.css";
import { useState } from "react";

function ItemCount ({initial, stock, onAdd}){
    const [cantidad, setcantidad] = useState(initial);

    const increment = () => {
        if(cantidad < stock){
            setcantidad(cantidad + 1);
        }
    }

    const decrement = () => {
        if(cantidad > 1){
            setcantidad(cantidad - 1);
        }
    }

    return(
        <div className="containerCount">
            <div className="controls">
                <button onClick={decrement}>-</button>
                <h4>{cantidad}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button className="addToCart" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount;
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({items}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <picture>
                <img src={items.img} alt={items.name}/>
            </picture>
            <div>
                <h2>{items.name}</h2>
                <p>Cantidad: {items.quantity}</p>
                <p>Subtotal: {items.quantity * items.price}</p>
                <button onClick={()=>removeItem(items.id)}>Eliminar</button>
            </div
            >
        </div>
    )
}

export default CartItem;
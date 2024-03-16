import "./CartWidget.css";
import Cart from "../../img/cartShopping.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const {totalQuantity} = useContext(CartContext);
    return(
        <Link to="/cart" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={Cart} alt="carrito"></img>
            {totalQuantity}
        </Link>
        
    );
}

export default CartWidget;
import "./CartWidget.css";
import Cart from "../../img/cartShopping.svg";

function CartWidget(){
    return(
        <div>
            <img src={Cart} alt="carrito"></img>
            0
        </div>
        
    );
}

export default CartWidget;
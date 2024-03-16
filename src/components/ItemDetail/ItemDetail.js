import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, price, category, img, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem} = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price
        }

        addItem(item, quantity);
    }

        return(
            <article className="article">
                <header>
                    <h2>{name}</h2>
                </header>
                <picture>
                <img src={img} alt={name}></img>
                </picture>
                <section>
                    <p className="categ">categoría: {category}</p>
                    <p>Descripción: {name}</p>
                    <p className="precio">Precio: $ {price}</p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="Option">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </article>
        )
}

export default ItemDetail;
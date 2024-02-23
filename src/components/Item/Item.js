import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="article">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name}></img>
            </picture>
            <section>
                <p>Precio:${price}</p>
                <p>Stock:{stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className="Option">Ver detalles</Link>
            </footer>
        </article>
    )

}

export default Item;
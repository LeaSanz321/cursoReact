import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, category, img, stock}) => {

        return(
            <article className="article">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
            <img src={img} alt={name}></img>
            </picture>
            <section>
                <p>categoría:{category}</p>
                <p>Descripción:{name}</p>
                <p>Precio:${price}</p>
            </section>
            <footer>
            <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}/>
            </footer>
        </article>
        )
}

export default ItemDetail;
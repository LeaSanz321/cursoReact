import Item from "../Item/Item"
import "./ItemList.css";


const ItemList = ({productos, titulo}) => {
  return (
    <div className="container">
        <h2>{titulo}</h2>
        <div className="productos">
            {productos.map(prod => <Item producto={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList
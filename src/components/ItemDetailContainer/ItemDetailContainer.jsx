import { useEffect, useState } from "react"
import { pedirDatosPorId } from "../../pedirDatos/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      pedirDatosPorId(Number(id))
        .then(res => {
            setItem(res);
        })
    }, [id])
    

  return (
    <div className="container">
       {item && <ItemDetail item={item} /> }
    </div>
  )
}

export default ItemDetailContainer
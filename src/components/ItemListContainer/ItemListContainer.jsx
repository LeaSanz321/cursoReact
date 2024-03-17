import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        
      const productosRef = collection(db, "products");

      const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;



      getDocs(q)
        .then((res) => {

          setProductos(
            res.docs.map((data) => {
              return {...data.data(), id: data.id}
            })
          )


        })

    }, [categoria])
    

  return (
    <ItemList productos={productos} titulo={titulo}/>
  )
}

export default ItemListContainer
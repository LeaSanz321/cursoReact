import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{

        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(err => {
                console.error(err);
            })
    }, [categoryId]);

    return(
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;
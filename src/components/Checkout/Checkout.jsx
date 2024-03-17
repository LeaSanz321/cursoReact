import "./Checkout.css";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {

    const {cart, precioTotal, vaciarCarrito} = useContext(CartContext);

    const [pedidoId, setPediodoId] = useState("");

    const {register, handleSubmit} = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "checkouts");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPediodoId(doc.id);
                vaciarCarrito();
            })
    }


    if(pedidoId){
        return(
            <div className="compraOkContainer">
                <h1>¡Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es: <span>{pedidoId}</span></p>
            </div>
        )
    }

   

  return (
    <div className="checkContainer">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
            <input type="phone" placeholder='Ingresa tu teléfono' {...register("telefono")}/>

            <button type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout
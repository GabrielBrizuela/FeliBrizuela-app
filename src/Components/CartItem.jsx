import React from "react";
import { useCartContext } from "../Context/CartContex";


const CartItem = ({productos})=> {
    const {removeProducto} = useCartContext ();
    return (
        <div className="cart">
            <img src={productos.image} className="card-img-top" alt={productos.nombre} />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{productos.nombre}</b></h5>
                <h4 className="card-text text-center">${productos.precio}</h4>
                <p>Cantidad: {productos.cantidad}</p>
                <p>Subtotal: ${productos.cantidad * productos.precio} </p>
                <button onClick={()=> removeProducto(productos.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
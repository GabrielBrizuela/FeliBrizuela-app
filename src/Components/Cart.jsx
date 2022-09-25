import React from "react";
import { useCartContext } from "../Context/CartContex";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";


const Cart = ()=> {
    const { cart, totalPrecio } = useCartContext ();

    if (cart.lenght === 0){
        return (
            <div>
            <p>No hay elementos en el carrito</p>
            <Link to="/">Hacer una compra</Link> 
            </div>
        );
    }

    return (
        <div>
            {
                cart.map(productos => <CartItem key={productos.id} productos={productos}/>)
            }
            <p>
                Total: {totalPrecio ()}
                
            </p>
        </div>
    );
};

export default Cart;
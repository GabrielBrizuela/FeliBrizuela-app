import React from "react";
import { useCartContext } from "../Context/CartContex";



const CartWidget = ()=> {
    const {totalProductos}= useCartContext();
    return (
        <div style={{ display: 'flex', alignItems: 'center', color:"white" }}>
            <span className="material-icons">shopping_cart</span>
            <span> (totalProductos()||'')   </span>
        </div>
    );
};

export default CartWidget;
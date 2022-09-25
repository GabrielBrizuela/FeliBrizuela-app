import React from 'react';
import ItemCount from './ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContex';

const ItemDetail = ({ items }) => {
    const [goToCart, setGoToCart] = useState(0)
    const {addProducto} = useCartContext();

    const onAdd = (cantidad) => {
        setGoToCart(cantidad);
        addProducto (items, cantidad);
    };

    return (
        
            <div className="container">
                <div className="detail">
                    <img src={items.image} alt={items.nombre} />
                    <div className="infoDetail">
                        <h3>{items.nombre}</h3>
                        <p>
                            {items.descripcion}
                        </p>
                        <h3>${items.precio}.-</h3> 
                        {goToCart === 0 ?(
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />) : (
                        
                            <Link to='/cart'>Terminar compra</Link>)
                               
                        }
                    </div>
                </div>
            </div>
            
    );
};

export default ItemDetail;
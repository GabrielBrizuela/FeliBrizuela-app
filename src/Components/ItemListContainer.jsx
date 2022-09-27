import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContex";
import ItemList from "./ItemList";
import { productos } from "./Productos";


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const valores = useContext (CartContext)

    const {categoryId} = useParams ();

    useEffect (()=> {        
        const getProductos = new Promise ((resolve)=> {
            setTimeout (()=> {
                resolve(productos);
            }, 500);
        });
        if (categoryId) {
            getProductos.then (resolve => setItems(resolve.filter (productos=> productos.categoryId === categoryId)));
        } else {
            getProductos.then (resolve =>setItems(resolve));
        }
    }, [categoryId]);
   

    return (
        <div className="container">
            <h2 onClick={valores.saludo}>{valores.nombre}</h2>
            <ItemList items ={items}/>
        </div>
    )
}

export default ItemListContainer;
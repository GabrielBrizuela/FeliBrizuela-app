import React, { useEffect, useState } from 'react';
import { productos } from './Productos';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    const {detalleId} = useParams ();

    useEffect(() => {
        const getItems = () =>
            new Promise((resolve) => {
               setTimeout(() => {
                    resolve(productos.find(productos=> productos.id=== parseInt(detalleId))|| []);
                }, 500);
 
            } );
              getItems ().then((resolve)=> {
                setItems(resolve);
                
            });
       
       
    }, [detalleId])

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail items={items} />
        </div>
    );
};

export default ItemDetailContainer;
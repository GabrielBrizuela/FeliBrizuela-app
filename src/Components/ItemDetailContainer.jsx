import React, { useEffect, useState } from 'react';
import { productos } from './Productos';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    const {detalleId} = useParams ();

    useEffect(() => {
        const getItems = () =>
            new Promise((res, rej) => {
                const producto = productos.find ((prod) => prod.id === Number (detalleId));
                setTimeout (() => {
                    res (producto);
                }, 500);

            });

              getItems ().then((info)=> {
                setItems(info);
                
            })
            .catch((error) => {
                console.log(error);
            });
       
    }, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail items={items} />
        </div>
    );
};

export default ItemDetailContainer;
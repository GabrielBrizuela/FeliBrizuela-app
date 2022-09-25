import React from "react";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setcantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const restarCantidad = (valor) => {
        if (valor > 0) {
            setcantidad(valor);
        }
    }

    const aumentarCantidad = (valor) => {
        if (valor <= itemStock) {
            setcantidad(valor);
        }
    }

    const agregarProducto = () => {
        if (itemStock > 0) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }

        onAdd (cantidad)

    }

    useEffect (()=> {
        setcantidad (parseInt (initial));
    }, [initial])


    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center">Nombre del Producto</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => { restarCantidad(cantidad - 1) }} />
                        <input type="text" className="form-control" value={cantidad} onChange={()=>{}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => { aumentarCantidad(cantidad + 1) }} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <button className="btn btn-primary" type="button" onClick={() => { agregarProducto() }} >Agregar</button>
                    </div>
                    <p>Productos Seleccionados: {itemAdd}</p>
                </div>
            </div >
        </div>
    )
};

export default ItemCount;
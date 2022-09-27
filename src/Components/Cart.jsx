import { useContext } from "react";
import { CartContext } from "../Context/CartContex";



const Cart = () => {
   const { cart, deleteOne, deleteAll} = useContext(CartContext);
   return (
    <div>
       <h1> Cart </h1>
        {cart.map ((items)=> (
            <div key= {items.id}>
                <h2> {items.nombre}</h2>
                <button onclick ={() => deleteOne (items.id)}> Delete</button>
                </div>

        ))}
        <button onClick={deleteAll}> Delete All </button>
    </div>
   )
};

export default Cart;
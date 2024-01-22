import React from 'react';
import { useCartContext } from '../Context/CartContext';
import EstilosCart from "../Cart/EstilosCart.css"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="itemCart">
        <img src={product.img} alt={product.title} />
        <div>
          <p className='pCart'>Nombre: {product.nombre}</p>
          <p className='pCart'>Cantidad: {product.quantity}</p>
          <p className='pCart'>Precio u.: ${product.precio}</p>
          <p className='pCart'>Subtotal: ${product.quantity * product.precio}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    );
};

export default ItemCart;

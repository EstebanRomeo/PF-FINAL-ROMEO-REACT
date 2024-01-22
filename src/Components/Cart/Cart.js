import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EstilosCart from "./EstilosCart.css"

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
 
  if (cart.length === 0) {
    return (
      <div className='cartContainer'>
      <div className='nElement'>
        <h3>No hay elementos en el carrito</h3>
        <Link to="/">VOLVER</Link>
      </div>
      </div>
    );
  }

  return (
    <div className='cartContainerFinal'>
      <h1>TU PEDIDO</h1>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;

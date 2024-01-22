import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemDetailEstilos from "./ItemDetailEstilos.css"


const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div className='itemContainerDetail'>
     <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid'alt={item.title}/>
        <h2>{item.nombre}</h2>
        <p><mark>INGREDIENTES: <br></br>{item.ingredientes}</mark></p>
        <h4> $ {item.precio}</h4>
        <h5> Cantidad: {item.cantidad}</h5>
     </div>
     <div>
      {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={item.cantidad} initial={1} onAdd={onAdd} />}
     </div>
     </div>
  )
}

export default ItemDetail
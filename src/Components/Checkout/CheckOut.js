import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import {getFirestore, collection,addDoc,updateDoc,doc,getDoc,} from 'firebase/firestore';
import CheckoutEstilos from './CheckoutEstilos.css';

export const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const { cart, totalPrice, removeProduct } = useCartContext();

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los email no coinciden');
      return;
    }

    const total = totalPrice();
    const orden = {
      items: cart.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        cantidad: producto.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    try {
      const db = getFirestore();
      const batch = [];

      for (const productoOrden of orden.items) {
        const productoRef = doc(db, 'products', productoOrden.id);
        const productoDoc = await getDoc(productoRef);

        if (productoDoc.exists()) {
          const stockActual = productoDoc.data().stock;

          batch.push(
            updateDoc(productoRef, {
              stock: stockActual !== undefined ? stockActual - productoOrden.cantidad : 0,
            })
          );
        } else {
          console.log(`El producto con ID ${productoOrden.id} no existe.`);
        }
      }

      await Promise.all(batch);

      const docRef = await addDoc(collection(db, 'orders'), orden);
      setOrdenId(docRef.id);
      removeProduct();
    } catch (error) {
      console.error('Error en la transacción:', error);
      setError('Error en la orden');
    }

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
    setMensaje('');
  };

  return (
    <div>
      <h2>COMPLETE CON SUS DATOS PARA FINALIZAR LA COMPRA</h2>
      <form className="form" onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
          <div key={producto.id}>
            <p>{''} {producto.nombre} {producto.cantidad}</p>
            <p>{producto.precio}</p>
          </div>
        ))}

        <div>
          <p className="heading">INGRESE SUS DATOS</p>
          <label className="input">Nombre:</label>
          <input
            className="input"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="input">Apellido:</label>
          <input
            className="input"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label className="input">Telefono:</label>
          <input
            className="input"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label className="input">Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="input">Confirmar email</label>
          <input
            className="input"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            ¡Gracias por tu compra ! Tu numero de seguimiento es: <br /> {''} {ordenId} {''} <br />
          </p>
        )}
        <div>
          <button type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

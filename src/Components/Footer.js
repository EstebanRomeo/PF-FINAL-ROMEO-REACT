import React from 'react'
import "../Components/Footer-estilos.css"

const Footer = () => {
  return (
    <footer className='footer'>
    <ul>
      <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
      <li className="nav-item"><a href="#" className="nav-link">Normales</a></li>  
      <li className="nav-item"><a href="#" className="nav-link">Con Vegetales</a></li>
      <li className="nav-item"><a href="#" className="nav-link">Especiales</a></li>
    </ul>
    <div>
    <p className="text-footer">© 2022 LaPizza Company, Inc</p>
    </div>
  </footer>
  )
}

export default Footer
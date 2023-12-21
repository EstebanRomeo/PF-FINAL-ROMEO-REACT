import React from 'react'
import { useParams } from 'react-router-dom'


const CelularesId = () => {

   const {id, name} = useParams();

  return (
    <div>
      <h3>Este producto seria el id: {id}</h3>
      <h5>Es marca: {name}</h5>
    </div>
  )
}

export default CelularesId

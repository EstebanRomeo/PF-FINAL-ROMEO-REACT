import React from 'react'
import useFetchData from '../useFetchData'

const DataComponent = () => {

  const {data, isLoading, error} = useFetchData('https://jsonplaceholder.typicode.com/posts');

  if(isLoading){
    return <p> Cargando...</p>
  }
  if (error){
    return <p>Error: {error}</p>;
  }
   
  return (
    <div>
      {data && <pre>{JSON.stringify(data,null,2)}</pre>}
    </div>
  )
}

export default DataComponent

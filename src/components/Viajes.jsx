import React from 'react'
import { useEffect, useState } from 'react'



const Viajes = () => {
  const [viaje, setViaje] = useState([])
  const [busqueda, setBusqueda] = useState('')
  
  useEffect(() => {
    fetch('../../db/dataset.json')
    .then(response => response.json())
    .then(datos =>{
      setViaje(datos)
    })
  }, [])

  const handleSubmit = (event) =>{
    setBusqueda(event.target.value)
  }


  let res = (viaje.filter((item) => item.price <= busqueda))

  const resultado = !busqueda ? viaje : res 

  console.log(res)

  return (
    <>
      <div className='input'>
            <input 
                type="text" 
                placeholder='LOOK FOR ITS PRICE...'
                value={busqueda} 
                onChange = {handleSubmit}
            />
        </div>
        {resultado.map((vuelos) => (
        <div className="card">
          <div className="card-body">
              <div>
                <p><b>Data: </b>{vuelos.data}</p> 
                <p><b>Origin: </b>{vuelos.origin}</p>
                <p><b>Destination: </b>{vuelos.destination}</p>
                <p><b>Price: $</b>{vuelos.price}</p>
                <p><b>Availability: </b>{vuelos.availability}</p>
              </div>
          </div>
      </div>
    ))} 
   {/* {
     (res.length > 0) ? res : 
      <div className='not-viajes'>
        <div className='card-not'>
          <p>There are no trips with the registered price</p>
        </div>
      </div>
    } */}
    </>

  )
}

export default Viajes;
import React from 'react'
import './Header.css'


export default function Header() {
  return (
    <div id='container-general__header'>
      <h2 id='titulo-challenge__header'>Challenge - ProFlight</h2>
      <p className='texto-description__header'>- Creamos un componente tal cual como se pedia en la consigna.
        Cuando damos click pasa la 'propiedad de css' al componente siguiente o anterior.
      </p>
      <p className='texto-description__header'>- Gracias a los eventos aplicados en las flechas, logramos interactuar con la interfaz.</p>
    </div>
  )
}

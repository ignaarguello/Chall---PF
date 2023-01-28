import React from 'react'
import './Header.css'
import 'animate.css';

export default function Header() {
  return (
    <div id='container-general__header'>
      <h2 id='titulo-challenge__header' className='animate__animated animate__lightSpeedInLeft animate__slow'>Challenge - ProFlight</h2>
      <p className='texto-description__header animate__animated animate__fadeIn animate__delay-1s'>- Creamos un componente tal cual como se pedia en la consigna.
        Cuando damos click pasa la 'propiedad de css' al componente siguiente o anterior.
      </p>
      <p className='texto-description__header animate__animated animate__fadeIn animate__delay-2s'>- Gracias a los eventos aplicados en las flechas, logramos interactuar con la interfaz.</p>
    </div>
  )
}

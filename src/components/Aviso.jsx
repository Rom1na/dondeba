import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { useDContext } from '../context/Cntxt'


const Aviso = () => {

    const {setVisto}= useDContext();

  return (
    <div
      style={{
        borderTop: '4px solid #e74c3c',
        boxShadow: '5px 10px 8px #888888',
        padding: '5px',
        fontSize:'14px',
        width:'280px'
        
      }}
    
    >
      <FaExclamationCircle color='#e74c3c' fontSize='24px'/>  
      <p>Este sitio es un prototipo de código y diseño para aplicar a diferentes proyectos, si bien la información proviene del programa de Datos Abiertos de la Ciudad de Buenos Aires, la misma puede no estar actualizada.</p>
      <p>Muchas gracias</p>
      <button onClick={()=>setVisto(true)}
      >Entendido <MdOutlineDoneOutline color='lightgreen'/> </button>


    </div>
  )
}

export default Aviso
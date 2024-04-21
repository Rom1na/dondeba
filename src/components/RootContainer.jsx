import React from 'react'
import Main from './Main'
import Contenedor from './Contenedor'
import { useDContext } from '../context/Cntxt'
import { SlLocationPin, } from "react-icons/sl"
import { FaLocationDot } from "react-icons/fa6"



const RootContainer = () => {

    const {display,setDisplay,ubiForm,data,pag} = useDContext(); 

  return (
  <>
    <h2
    style={{
     textAlign:"left",
     marginLeft:"2px",
     marginRight: "2px",
     marginTop :"5px",
     fontSize:"20px",
     borderBottom: "3px solid black"
     

    }}
   >Donde? <FaLocationDot color='red' fontSize="18px" /> -   Buenos Aires </h2> 


{!data.length == 0&&<h3
                   style={{fontSize:"15px"}}
                   > {ubiForm.q} - {ubiForm.dir} - {data.length} resultados ({pag.inicio}-{pag.fin}) </h3>
}


 


   


      
<section

    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      gap:"10px",
      width:"100%"}}


>

{display &&<Main/>}
<Contenedor/>





</section>




</>
  )
}

export default RootContainer
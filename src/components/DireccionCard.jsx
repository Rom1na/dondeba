import React from 'react'
import'../css/DireccionCard.css'
import { useDContext } from '../context/Cntxt'
import { ordenarObjetoPorCercania } from '../util/geo'

const DireccionCard = ({direccion,url,urlOSM,lat,lon,p,setForm}) => {
  const {data,ubiForm,display,setData,setUbiForm,setDisplay}= useDContext();

  const fetchJsonXDireccion = async (u,format) => {
    try {
     
      const datos = await fetch(u);
      const response = await datos.json();  
      console.log(response);
      const rta = format(response);
      console.log(rta[0]);
      //setData(rta);
      console.log(rta);
      setUbiForm({
        ...ubiForm,
        dir: direccion});
      ordenarObjetoPorCercania(rta,lat,lon,setData);
      setDisplay(false);
      
    } catch (error) {
      console.log(error);
    }
    
}    




    return (

    
    <div>
    <div className='Dcard' >

    <div className='Dcontent2'>
   
      
      <p className='Dtexto1'> {direccion} </p>
      
     
  
      
      <iframe 
       src={urlOSM}
       style={{
       width:'90%',
       height:'200px',
       frameBorder:"0",
       scrolling:"no",
       marginHeight:"0",
       marginWidth:"0" ,
       border: '1px solid black'}}>
     </iframe>
    <br />
    <br />
    <br />
    
<div>


    <a style={{
        margin:'20px'}}
    href={url}  target="_blank" className="Dcard-link">Abrir en GoogleMaps</a>

    <button className='Dbtn'
    
    onClick={()=>fetchJsonXDireccion(ubiForm.ubi,ubiForm.formato)}
    
    >Elegir esta dirección</button>  
 </div>

    </div>
    
    </div>
  </div>

  
  )
}

export default DireccionCard
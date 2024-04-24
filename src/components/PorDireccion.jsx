import React, { useEffect } from 'react'
import '../css/PorDirecion.css'
import { useState } from 'react'
import DireccionCard from './DireccionCard'
import { SlLocationPin } from "react-icons/sl";
import { useDContext } from '../context/Cntxt'
import { traerResultado } from '../util/geo';

const PorDireccion = () => {

const [direccionSelect,setDireccionSelect] = useState ('Ubicación');
const {data,ubiForm,direcciones,setData,form,setUbiForm,setDirecciones,setForm}= useDContext();



  

 useEffect(()=>{
  




 },[]);

 




 const handleChange=(e)=>{
  const name = e.target.name;
  const value = e.target.value;

   setForm({
   ...form,
  [name]: value,

   });

 }





  return (
    <>
   
   <div className="contenedor"> 
        <form className="form">
    <div className="header">O Ingresa una dirección:</div>
   
    <br></br>
    <div className="inputs">
        <input
         name="calle"
         value={form.calle}
         onChange={handleChange}
         placeholder="Calle" 
         className="input" 
         type="text"/>
        <input 
        name="altura"
        value={form.altura}
        onChange={handleChange}
        placeholder="Altura" 
        className="input"
         type="text"/>
       





        
      </div>   
      <p style={{fontSize: "11px"}}
    >Los resultados están ordenados por cercanía a la dirección ingresada</p>  
    <br></br>
   { form.calle != "" &&  ubiForm.q != undefined &&<button 
     style={{
      backgroundColor:'black'
      }}
     
     className="sigin-btn" type='button'
     onClick={()=>traerResultado(form.calle,form.altura,form.localidad,form.provincia,setDirecciones,setDireccionSelect)}>Consultar opciones de dirección</button> }

     </form>

    
        

<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap:"10px",
    width:"75%"
    
    
 }}  
>
{  direcciones?.map((dir)=>

           


<DireccionCard

direccion={dir.nomenclatura}
url = {dir.url}
urlOSM={dir.urlOSM}  
lat={dir.lat}
lon={dir.lon}
p={form.provincia}
setForm={setForm}




/>
  

) 
}
  
</div>     


    






    </div>

 </>

  )
}

export default PorDireccion
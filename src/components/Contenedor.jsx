import React from 'react'
import Card from './Card'
import { useDContext } from '../context/Cntxt'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Popup from './Popup'


const Contenedor = () => {

  const {data,ubiForm,display,direcciones,form,pag,setData,setUbiForm,setDisplay,setDirecciones,setForm,clearForm,setPag,visto}= useDContext();
  
 

  const aumento=()=>{
    setPag({
      inicio:pag.inicio+8,
      fin:pag.fin+8,
    }
    );
    
  }

  const disminucion=()=>{
    setPag({
      inicio:pag.inicio-8,
      fin: pag.fin-8,
    }
    );
    
  }





  return (
  <>


     



    <section
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      gap:"10px",
      width:"75%"
      
      
   }}>

<div>

 {!visto&&<Popup/>}

{ !display&&<button
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor:"#fdd306",
      color:"black"
    }         
    }
    onClick={clearForm}

    >Nueva Búsqueda</button>} 

{ !pag.inicio== 0&&<button
    
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor:"black"  
    }         
    }
    onClick={disminucion}

    ><FaArrowLeft color='#fdd306'fontSize='11px'/></button>} 

{ !(data.length <= pag.fin) &&<button
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor: "black", 
    }         
    }
    onClick={aumento}

    >< FaArrowRight color='#fdd306'fontSize='11px'/></button>} 

</div>
  


       



    </section>


   
  


     



    <section
     style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
          gap:"10px",
          width:"75%"
          
          
       }}  
    >
      
      
      {  data?.slice(pag.inicio,pag.fin).map((dep)=>

           

                   
                   <Card
                   key={dep.id}
                   dato1 = {dep.descripcion}
                   dato2 = {dep.direccion}
                   dato3 = {dep.adicional}
                   url = {dep.url}
                   urlOSM={dep.urlOSM}  
                  
                   />
                     
       
               ) 
               }







      
    </section>

    <section
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      gap:"10px",
      width:"75%"
      
      
   }}>

{data.length != 0&&<div
    style={{
     marginBottom: "25px",
          
    }}  
      >

{ !display&&<button
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor:"#fdd306",
      color:"black"
    }         
    }
    onClick={clearForm}

    >Nueva Búsqueda</button>} 

{ !pag.inicio== 0&&<button
    
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor:"black" }         
    }
    onClick={disminucion}

    ><FaArrowLeft color='#fdd306'fontSize='11px'/></button>} 

{ !(data.length <= pag.fin) &&<button
    style={{
      marginRight:"5px",
      fontSize:"11px",
      backgroundColor: "black"}         
    }
    onClick={aumento}

    ><FaArrowRight color='#fdd306'fontSize='11px'/></button>} 

</div>}
  


       



    </section>



   </> 
  )
}

export default Contenedor
import React from 'react'
import { useState } from 'react'
import { sel } from '../data/datos'
import { formatearCajeros,formatearFarmacias,formatearSubte,formatearSede,formatearEstaciones, formatearGastro, formatearCultura } from '../util/Filters'
import PorDireccion from './PorDireccion'
import { useDContext } from '../context/Cntxt'
import farmacias from '../data/farmacias.json'

const Main = () => {
    
    const [bar, setBar] = useState();
    const {data,ubiForm,display,setData,setUbiForm,setDisplay,clearForm}= useDContext();
    
  
    
    const barrios = sel.barrios;
    const tipos = sel.tipos;
    const texto = farmacias[0].barrio;
    
    
    
      
    
    const filtrarDataXBarrio=(barrio,d) =>{
      const dataActualizada = d.filter(inst =>inst.barrio == barrio);
     // console.log('3',dataActualizada)
      return dataActualizada;
    
    }
    
    
    function manejarSelectBarrio (e){
      const p = e.target.value;
      setUbiForm({
        ...ubiForm,
        dir: p
    });

      setBar(p)
    
    };
    
    function manejarSelectTipo(e){
      const r = e.target.value;
      let m;
      console.log('2',farmacias[0].barrio);
      switch (r){
        case "Farmacias":
           setUbiForm ({
            ...ubiForm,
            ubi: sel.ubicaciones.farmacias,
            formato: formatearFarmacias, 
            q: r,
                      });
          break;
        case "Cajeros Automáticos":
          setUbiForm ({
            ...ubiForm,
            ubi: sel.ubicaciones.cajeros,
            formato: formatearCajeros, 
            q:r ,
                      });
          break;
        case "Bocas de Subte":
            setUbiForm ({
              ...ubiForm,
              ubi: sel.ubicaciones.bocasdesubte,
              formato: formatearSubte, 
              q:r,
                        });
          break; 
        case "Sedes Comunales":
           setUbiForm ({
             ...ubiForm,
             ubi: sel.ubicaciones.sedes,
             formato: formatearSede, 
             q:r, 
            });
          break;
          case "Estaciones de Servicio":
            setUbiForm ({
              ...ubiForm,
              ubi: sel.ubicaciones.estaciones,
              formato: formatearEstaciones, 
              q: r,
                         });
           break;  
           case "Espacios Culturales":
            setUbiForm ({
              ...ubiForm,
              ubi: sel.ubicaciones.espaciosculturales,
              formato: formatearCultura, 
              q: r,
                         });
           break;  
           case "Oferta Gastronomica":
            setUbiForm ({
              ...ubiForm,
              ubi: sel.ubicaciones.ofertagastronomica,
              formato: formatearGastro, 
              q: r,
                         });
           break;  
    
        
          
      };
    
    
    };
    
    
    
    const fetchJson = async (u,format,filt) => {    

     
      
      try {
          
          const datos = await fetch(u,{
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )

          const response = await datos.json();  
          console.log(response);
          const rta = format(response);
       //   console.log(rta[0]);
          //setData(rta);
       //   console.log(rta);
          const rta2 = filtrarDataXBarrio(filt,rta);
          console.log('2',rta2);
          if (rta2.length === 0){
            alert (`No encontramos ${ubiForm.q} en ${ubiForm.dir}`)
            
          }  
              
                         
          setData(rta2);
          setDisplay(false);

    
        } catch (error) {
          console.log(error);
        }
      
    }
        
        




  return (

    <div style={{
        padding:"15px",
       
     
     }
       
     }>
     
     <select 
                 style={{
                   marginRight:"5px",
                   fontSize:"14px",
                   marginBottom:"15px",
                   boxShadow: "5px 10px 8px #888888"}              
                 }
               onChange={manejarSelectTipo}> 
                 
                         <option selected>¿Qué buscás?{texto}</option>     
                         {
                             tipos?.map((valor)=>(
                               <option key={valor} value={valor}>
                               {valor} 
                               </option>
                             ))
                           }
                     
               </select>
     
     <div
           style={{
           display: 'flex',
           flexWrap: 'wrap',
           alignContent: 'center',
           justifyContent: 'center'
           
           
        }}  
                
          >
     
     
           
        <div
         style={{
           width:"100%",
     
         }}
        
        >
     
     
        <br />
        <br />
     
               
     
     
     <select 
               style={{
                 marginRight:"5px",
                 fontSize:"14px"}         
               }
     
               
               
               onChange={manejarSelectBarrio}> 
                 
                         <option selected>Selecciona el barrio</option>     
                         {
                             barrios?.map((valor)=>(
                               <option key={valor} value={valor}>
                               {valor} 
                               </option>
                             ))
                           }
                     
               </select>
     
               {bar != undefined && ubiForm.q != undefined && <button
                style={{
                 backgroundColor:'black', 
                 marginRight:"5px",
                 fontSize:"14px"}

               }
               onClick={()=>fetchJson(ubiForm.ubi,ubiForm.formato,bar)}
               >Buscar</button>}
     
    
           
     
     </div>

     <PorDireccion></PorDireccion>
     

  </div>
  </div>
    
  )
}

export default Main
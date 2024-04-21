import { Children, createContext,useContext,useState } from "react";
export const DContext= createContext();


export const ContextoProveedor = ({children})=>{

    
    const [data,setData] = useState([]);
    const[visto,setVisto] = useState(false);
    const [display,setDisplay] = useState(true);
    const[direcciones, setDirecciones]= useState([]);
    
    const [ubiForm,setUbiForm] = useState({
        ubi:"",
        formato: "",
        dir:"",
    
    });
    
    
   const [form,setForm] = useState({
   calle:"",
   altura:"",
   });

   const [pag,setPag] = useState({
      inicio:0,
      fin:8,
      });


   const clearForm =()=>{
      setData([]),
      setDirecciones([])
      setUbiForm({
        ubi:"",
        formato: "",
        dir:"",
    })
      
      setForm({
       calle:"",
       altura:""
  
      }) 
  
      setDisplay(true);

      setPag({
         inicio:0,
         fin:8,

      })

       
  
  };



   return(
    <DContext.Provider
       value={{
          data,
          display,
          direcciones,
          ubiForm,
          form,
          pag,
          visto,

          setData,
          setDisplay,
          setDirecciones,
          setUbiForm,
          setForm,
          setPag,
          clearForm,
          setVisto

       }}
    
    >

       {children}

    </DContext.Provider>
    
   );

};


export const useDContext=() =>{

     const {data,ubiForm,display,direcciones,form,pag,visto,setData,setUbiForm,setDisplay,setDirecciones,setForm,clearForm,setPag,setVisto} = useContext(DContext);


   return{ 
        data,
        ubiForm,
        display,
        direcciones,
        form,
        pag,
        visto,
        setData,
        setUbiForm,
        setDisplay,
        setDirecciones,
        setForm,
        setPag,
        clearForm,
        setVisto,
        
      }  





};

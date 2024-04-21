import React from 'react'
import '../css/Card.css'

const Card = ({dato1,dato2,dato3,url,urlOSM}) => {


    return (
        <div>
        <div className='card' >
    
        <div className='content2'>
    
          
          <p className='titulo'> {dato1} </p>
          <p className='texto1'> {dato2} </p>
          <p className='texto1'> {dato3} </p>
          
         
      
          
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
        href={url} target="_blank" className="card-link">Abrir en GoogleMaps</a>
    
     </div>
    
        </div>
        
        </div>
      </div>
      )
    
  
   





}

export default Card
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {formatearCajeros, formatearFarmacias,formatearSubte,formatearSede,formatearEstaciones } from './util/Filters'
import Card from './components/Card'
import { sel } from './data/datos'
import PorDireccion from './components/PorDireccion'
import Contenedor from './components/Contenedor'
import { ContextoProveedor } from './context/Cntxt'
import RootContainer from './components/RootContainer'

function App() {
   
 

 




  return (
    <>

<ContextoProveedor>
  <RootContainer/>

</ContextoProveedor>


<footer
   style={{
    fontSize:"10px",
    color: "white",
    
    width: "99%",
 
    margin :"5px",
    position:"fixed",
    bottom:"0",
    backgroundColor:"black"
   


   }}

> 2024 - Curiosibit</footer>

    </>
  )
  
}

export default App

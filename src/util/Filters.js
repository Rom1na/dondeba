

export const formatearCajeros=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: c.banco,
      direccion: `${c.ubicacion}-${c.barrio}`,
      id: c.id,
      lat: c.lat,
      lon : c.long,
      barrio: c.barrio,
      orden : 0,
      adicional :`Terminales: ${c.terminales} (Red ${c.red})`,
      url : `https://maps.google.com?q=${c.lat},${c.long}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.long},${c.lat}&layer=mapquest&marker=${c.lat},${c.long}`,


  }));


  return resultado;

    



}


export const formatearFarmacias=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: c.comuna,
      direccion: `${c.calle_nombre} ${c.calle_altura}-${c.barrio}`,
      id: c.id,
      lat: c.lat,
      lon : c.long,
      barrio: c.barrio,
      orden : 0,
      adicional :`Teléfono: ${c.telefono}`,
      url : `https://maps.google.com?q=${c.lat},${c.long}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.long},${c.lat}&layer=mapquest&marker=${c.lat},${c.long}`,


  }));


  return resultado;

    



}


export const formatearSubte=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: `${c.estacion} Linea: ${c.linea}`,
      direccion: `${c.dom_orig}-${c.barrio}`,
      id: c.id,
      lat: c.lat,
      lon : c.long,
      barrio: c.barrio,
      orden : 0,
      adicional :`${c.observacio} - Destino: ${c.destino_bo}`,
      url : `https://maps.google.com?q=${c.lat},${c.long}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.long},${c.lat}&layer=mapquest&marker=${c.lat},${c.long}`,


  }));


  return resultado;

    



}


export const formatearSede=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: `${c.nombre}`,
      direccion: `${c.domicilio} - ${c.barrio}`,
      id: c.id,
      lat: c.WKT.slice(25,42),
      lon : c.WKT.slice(7,24),
      barrio: c.barrio,
      orden : 0,
      adicional :`Teléfono: ${c.telefono}`,
      url : `https://maps.google.com?q=${c.WKT.slice(25,42)},${c.WKT.slice(7,24)}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.WKT.slice(7,24)},${c.WKT.slice(25,42)}&layer=mapquest&marker=${c.WKT.slice(25,42)},${c.WKT.slice(7,24)}`,

  }));


  return resultado;

    



}


export const formatearEstaciones=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: `${c.nombre} - ${c.razon_social}`,
      direccion: `${c.domicilio}-${c.barrio}`,
      id: c.id,
      lat: c.lat,
      lon : c.long,
      barrio: c.barrio,
      orden : 0,
      adicional :`Tipo de combustibles: ${c.tipo_de_boca}`,
      url : `https://maps.google.com?q=${c.lat},${c.long}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.long},${c.lat}&layer=mapquest&marker=${c.lat},${c.long}`,


  }));


  return resultado;

    



}


export const formatearGastro=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: `${c.categoria} - ${c.nombre}`,
      direccion: `${c.direccion_completa}-${c.barrio}`,
      id: c.id,
      lat: c.lat,
      lon : c.long,
      barrio: c.barrio,
      orden : 0,
      adicional :`${c.cocina} - Tel:${c.telefono} `,
      url : `https://maps.google.com?q=${c.lat},${c.long}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.long},${c.lat}&layer=mapquest&marker=${c.lat},${c.long}`,


  }));


  return resultado;

    



}

export const formatearCultura=(data)=>{

  const resultado = data.map((c)=>({
      descripcion: `${c.FUNCION_PRINCIPAL} - ${c.ESTABLECIMIENTO}`,
      direccion: `${c.DIRECCION}-${c.BARRIO}`,
      id: c.fid,
      lat: c.LATITUD,
      lon : c.LONGITUD,
      barrio: c.BARRIO,
      orden : 0,
      adicional :`${c.SUBCATEGORIA}`,
      url : `https://maps.google.com?q=${c.LATITUD},${c.LONGITUD}`,
      urlOSM:`http://www.openstreetmap.org/export/embed.html?bbox=${c.LONGITUD},${c.LATITUD}&layer=mapquest&marker=${c.LATITUD},${c.LONGITUD}`,


  }));


  return resultado;

    



}









export const crearDirecciones = (data) => {

  const direcciones = data.direcciones.map((direccion)=>({
    nomenclatura : direccion.nomenclatura,
    lat: direccion.ubicacion.lat,
    lon: direccion.ubicacion.lon,
    url : `https://maps.google.com?q=${direccion.ubicacion.lat},${direccion.ubicacion.lon}`,
    urlOSM:`https://www.openstreetmap.org/export/embed.html?bbox=${direccion.ubicacion.lon},${direccion.ubicacion.lat}&layer=mapquest&marker=${direccion.ubicacion.lat},${direccion.ubicacion.lon}`,
    

  }));

  
  return direcciones; 



};


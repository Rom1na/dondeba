import { crearDirecciones } from "../util/Filters";


export const traerResultado = async (calle, altura, localidad,provincia,setDirecciones,setDireccionSelect) => {
    const url = `https://apis.datos.gob.ar/georef/api/direcciones?direccion=${calle}%20${altura}&provincia="Buenos Aires"&localidad="CABA"`;
    

     !calle&& alert("Debe ingresar un nombre de calle");
     !altura&& alert("Debe ingresar una altura");
     

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
            
        }
        const data = await response.json();
        if(data.cantidad ==0){
            alert('Lo siento, no pudimos identificar esa dirección, vuelva a intentarlo.')
            setDirecciones([]);
            setEstaciones([]);
            setDireccionSelect('Ubicaicón');
        }

        console.log('check',data.cantidad);
        const dires = crearDirecciones(data)
        console.log('Resultado:', data);
        console.log ('Direcciones',dires)
        setDirecciones(dires);
        
        
        
        return data; // Devuelve los datos obtenidos
    } catch (error) {
        console.error('Error:', error.message);
        throw error; // Propaga el error para que pueda ser manejado externamente
    }
};








export function ordenarObjetoPorCercania(objetoDatos, lt, ln,setData) {
    let ConLat, ConLon, lati, loni;
    let rlon, rlan, rlon2, rlan2, total, resultado;
    const datOrdenado = [];

    loni = parseFloat(ln);
    lati = parseFloat(lt);

    // Iterar a través de las propiedades del objeto
    for (let clave in objetoDatos) {
        if (objetoDatos.hasOwnProperty(clave)) {
            let d = Object.assign({}, objetoDatos[clave]);
            ConLat = parseFloat(d.lat);
            ConLon = parseFloat(d.lon);
            rlon = loni - ConLon;
            rlan = lati - ConLat;
            rlon2 = rlon * rlon;
            rlan2 = rlan * rlan;
            total = rlon2 + rlan2;
            resultado = Math.sqrt(total);
            d.orden = resultado;

            datOrdenado.push(d);
        }
    }

    datOrdenado.sort((o1, o2) => o1.orden - o2.orden);

    console.log ('dd',objetoDatos);
    console.log ('do',datOrdenado);

    setData(datOrdenado.slice(0,16));
   
}




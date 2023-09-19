import mañana from './etapas/1.png';import dia from './etapas/2.png';import tarde from './etapas/3.png';import noche from './etapas/4.png';
import './Hora.css'
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function Hora({tiempo}){
    const actual = new Date();
    actual.setDate(actual.getDate() + tiempo) 
    let img;
    const hora = actual.getHours()
    if (hora >= 7 && hora < 12) img = mañana
    if (hora >= 12 && hora < 19) img = dia
    if (hora >= 19 && hora < 22) img = tarde
    if ((hora >= 22 && hora <= 24) || (hora >= 0 && hora < 7 )) img = noche


    return(
        <>
            <h1>Es {actual.getDate()} de {meses[actual.getMonth()]} del {actual.getFullYear()} </h1>
            <img src={img}  />
            <h1>Fecha original: <br/> {new Date().getDate()} de {meses[new Date().getMonth()]} del {new Date().getFullYear()} </h1>
        </>  
    );
}

export default Hora;
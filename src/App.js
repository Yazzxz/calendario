import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hora from './Hora'

function App() {
  const [cant, setStep] = useState(0)
  const [total, setTotal] = useState(0)

  function next(){
    setStep(cant + 1)
  }
  function previous(){
    if(cant !== 0) setStep(cant - 1)
  }

  function sumar(){
    setTotal(total + cant)
  }
  function restar(){
    setTotal(total - cant)
  }
  return (
    <div className='container'>
      <button onClick={previous}>Anterior</button>
      <label>{cant}</label>
      <button onClick={next}>Siguiente</button>
      <br></br>
      <button onClick={restar}>Restar</button>
      <label>{total}</label>
      <button onClick={sumar}>Sumar</button>
      <br></br>
      <h1>Fecha Modificada:</h1>
      <Hora tiempo={total}/>
    </div>
  );
}

export default App;

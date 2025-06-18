import { useState } from "react";
import Calculadora from "../Calculadora/Calculadora.jsx";
import "./style/style.css";

const Botonera = () => {
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);

  return (
    <div className="botonera">
      <p>Calculadora →</p>
      <button onClick={() => setMostrarCalculadora(prev => !prev)}>+/-</button>
      {mostrarCalculadora && <Calculadora />}
    </div>
  );
};

export default Botonera;
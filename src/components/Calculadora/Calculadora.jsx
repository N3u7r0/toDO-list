import { useState } from "react";
import "./style/style.css";

const Calculadora = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const calcularResultado = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const toggleDisplay = () => {
    setDisplay((prev) => (prev ? "" : "0"));
  };

  const limpiar = () => {
    setDisplay("");
  };

  return (

    <aside >
      <form className="calculadora" onSubmit={(e) => e.preventDefault()}>

        <input
          name="display"
          className="display"
          type="text"
          readOnly
          value={display}
          placeholder="0"
        />

        <div className="teclado">
          <input id="btnOnOff" className="btn" type="button" value="O/I" onClick={toggleDisplay} />
          <input className="btn" type="button" value="C" onClick={limpiar} />
          <input className="btn" type="button" value="%" onClick={() => handleClick("%")} />
          <input className="btn" type="button" value="/" onClick={() => handleClick("/")} />

          <input className="btn btnNumero" type="button" value="7" onClick={() => handleClick("7")} />
          <input className="btn btnNumero" type="button" value="8" onClick={() => handleClick("8")} />
          <input className="btn btnNumero" type="button" value="9" onClick={() => handleClick("9")} />
          <input className="btn" type="button" value="X" onClick={() => handleClick("*")} />

          <input className="btn btnNumero" type="button" value="4" onClick={() => handleClick("4")} />
          <input className="btn btnNumero" type="button" value="5" onClick={() => handleClick("5")} />
          <input className="btn btnNumero" type="button" value="6" onClick={() => handleClick("6")} />
          <input className="btn" type="button" value="-" onClick={() => handleClick("-")} />

          <input className="btn btnNumero" type="button" value="1" onClick={() => handleClick("1")} />
          <input className="btn btnNumero" type="button" value="2" onClick={() => handleClick("2")} />
          <input className="btn btnNumero" type="button" value="3" onClick={() => handleClick("3")} />
          <input className="btn" type="button" value="+" onClick={() => handleClick("+")} />

          <input className="btn btnNumero" type="button" value="00" onClick={() => handleClick("00")} />
          <input className="btn btnNumero" type="button" value="0" onClick={() => handleClick("0")} />
          <input className="btn btnNumero" type="button" value="." onClick={() => handleClick(".")} />
          <input className="btn" id="igual" type="button" value="=" onClick={calcularResultado} />
        </div>
      </form>
    </aside>

  );
};

export default Calculadora;
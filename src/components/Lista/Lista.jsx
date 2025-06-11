import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./style/style.css";

const Lista = () => {
  const { datosArray, setDatosArray } = useContext(DataContext);
  const eliminarTarea = (index) => {
    //el uso de _ es para indicarle a filter que no necesita saber ese dato en concreto.
    const DatosArrayNew = datosArray.filter((_, indexActual) => indexActual !== index);
    setDatosArray(DatosArrayNew);
  };

  return datosArray.length !== 0 ? (
    <>
      <table className="tabla">
        <tbody>
          {datosArray.map((dato, index) => (
            <tr key={index}>
              <td className="td-tarea"><p>{dato.tarea}</p></td>
              <td className="td-fecha"><p>Fecha: {dato.fecha}</p></td>
              <td className="td-radio"><p>Prioridad: {dato.radio}</p></td>
              <td className="td-detalle"><p>{dato.detalle}</p></td>
              <td className="td-btn">
                <button className="btn-eliminar" onClick={() => eliminarTarea(index)}>x</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <div className="tbody">

      <p className="texto-lista-tabla">No hay tareas pendientes!</p>
    </div>

  )
}

export default Lista
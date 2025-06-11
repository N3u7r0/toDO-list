import { useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import "./style/style.css";

const Form = () => {

    const { setDatos } = useContext(DataContext);
    const tareaRef = useRef(null);
    const detalleRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        let tarea = tareaRef.current.value;
        let detalle = detalleRef.current.value || "Sin detalles...";
        let radio = document.querySelector('input[name="prioridad"]:checked')?.value || "baja";
        let fechaDato = new Date();
        let dia = fechaDato.getDate();
        let mes = fechaDato.getMonth() + 1;
        let fecha = dia + "/" + mes;
        setDatos({ tarea, detalle, radio, fecha })
        e.target.reset(); //limpia el formulario
    }

    return (
        <form className="div-formulario" type="submit" onSubmit={handleSubmit}
        >

            <ul className="ul-forulario">
                <li>
                    <p>Tarea</p>
                    <input name="tarea" className="text-area" type="text" placeholder="Escriba aca" ref={tareaRef} maxLength={60} required />
                </li>
                <li>
                    <p>Detalle</p>
                    <input name="detalle" className="text-area" type="text" placeholder='...' ref={detalleRef} maxLength={170} />
                </li>
                <li>
                    <p>Prioridad</p>
                    <div className="form-prioridad">
                        <p>Alta</p>
                        <input name="prioridad" type="radio" value="alta" />
                        <p>Media</p>
                        <input name="prioridad" type="radio" value="media" />
                        <p>Baja</p>
                        <input name="prioridad" type="radio" value="baja" />
                    </div>
                </li>
                <li>
                     <p>Enviar</p>
                    <button className="btn-enviar" type="submit">✔</button>
                </li>

            </ul>

        </form>
    )
}

export default Form
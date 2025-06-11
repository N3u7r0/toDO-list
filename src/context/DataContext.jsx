// context/DataContext.js
import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const storeDatosArray = JSON.parse(localStorage.getItem("datosArray"))

  // Estado inicial de datos
  const [datos, setDatos] = useState({
    tarea: "",
    fecha: "",
    radio: "",
    detalle: ""
  });

  // Estado inicial del array de las tareas
  const [datosArray, setDatosArray] = useState(storeDatosArray || []);

  // Guarda en el storage.
  useEffect(() => {
    localStorage.setItem("datosArray", JSON.stringify(datosArray));
  }, [datosArray]);


  useEffect(() => {
    //control para evitar que se suban tareas sin campos completos.(evita tambien los datos de montage del componente)
    if (datos.tarea && datos.radio) {
      //guarda lo q tenia mas los nuevos datos.
      setDatosArray((prevArray) => [...prevArray, datos]);
    }
  }, [datos]);

  return (
    <DataContext.Provider value={{ datos, setDatos, datosArray, setDatosArray }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
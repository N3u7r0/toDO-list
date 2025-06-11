// context/DataContext.js
import  { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Estado inicial de datos
  const [datos, setDatos] = useState({
    titulo: "N/a",
    prioridad: "N/a",
    detalle: "N/a"
  });

  const [datosArray, setDatosArray] = useState([datos]);

  useEffect(() => {
    // Agregar el nuevo dato al arreglo, manteniendo los anteriores
    setDatosArray((prevArray) => [...prevArray, datos]);
  }, [datos]); 

  return (
    <DataContext.Provider value={{ datos, setDatos, datosArray }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
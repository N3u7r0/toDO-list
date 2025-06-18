import Lista from "../components/Lista/Lista";
import Form from "../components/Form/Form";

import Botonera from "../components/Botonera/Botonera";
import { DataProvider } from "../context/DataContext";
import "./style/style.css";

const Layout = () => {


  return (
<>
    <div className="layout">
      <h1>To-Do List ✓</h1>
      <DataProvider>
        <Form />
        <Lista />
        <Botonera/>
      </DataProvider>
    </div>
    </>
  )
}

export default Layout
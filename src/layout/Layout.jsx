import Lista from "../components/Lista/Lista";
import Form from "../components/Form/Form";
import { DataProvider } from "../context/DataContext";
import "./style/style.css";

const Layout = () => {


  return (

    <>
      <DataProvider>
      
        <div className="layout">
          <Form />
          <Lista />
        </div>
      </DataProvider>
    </>
  )
}

export default Layout
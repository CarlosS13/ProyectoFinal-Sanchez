import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Error from "./components/Error";
import "./components/Styles.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<ItemListContainer />} />
        <Route path="/tienda/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/tienda/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Entrego la parte que tengo hecha de la entrega, en el lapso que el profe o tutor continue con las correcciones, voy a ir terminando de sumar la parte visual para que sea un poco mas atractivo. Perdon por la demora en no tener al 100% la entrega hecha al tiempo establecido, pero tuve un viaje familiar imprevisto y anduve corto de tiempo. Tuve dudas con la consigna que pedia acomodar los archivos en ItemDetailContainer y ItemListContainer, pregunte por el chat privado de Coder al profe pero me parece que no vio el mensaje porque no tuve respuesta. Lo hice como pude tratando de mantener la funcionalidad, espero por esta preentrega sea suficiente. En la entrega final lo corrijo bien. Gracias!

export default App;
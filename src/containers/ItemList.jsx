import Item from "./Item";
import { useState } from "react";

const categories = {
  MAQUINAS: "Maquinas",
  PEINES: "Peines",
  TIJERAS: "Tijeras",
  ACCESORIOS: "Accesorios"
}

function ItemList({items}) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = selectedCategory
  ? items.filter(item => item.categoria === selectedCategory)
  : items;


return (
  <div>
    <div>
      <button className="filterButton" onClick={() => setSelectedCategory("")}>
        Todos
      </button>
      <button className="filterButton" onClick={() => setSelectedCategory(categories.MAQUINAS)}>
        Maquinas
      </button>
      <button className="filterButton" onClick={() => setSelectedCategory(categories.PEINES)}>
        Peines
      </button>
      <button className="filterButton" onClick={() => setSelectedCategory(categories.TIJERAS)}>
        Tijeras
      </button>
      <button className="filterButton" onClick={() => setSelectedCategory(categories.ACCESORIOS)}>
        Accesorios
      </button>
    </div>
    <div className="container">
    {filteredItems.map(item => (
      <Item
        key={item.id}
        id={item.id}
        nombre={item.nombre}
        valor={item.valor}
        descripcion={item.descripcion}
      />
    ))}
    </div>
  </div>
);
}

export default ItemList;
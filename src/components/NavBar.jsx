import CartWidget from "./CartWidget/CartWidget"
import logo from "../assets/logo-barberia.png"
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const esTienda = location.pathname.startsWith("/tienda");

  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="Logo de la compañia" />
      </div>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/tienda">Tienda</NavLink>
      {esTienda && (
        <>
          <NavLink to="/tienda/categoria/maquinas">Máquinas</NavLink>
          <NavLink to="/tienda/categoria/tijeras">Tijeras</NavLink>
          <NavLink to="/tienda/categoria/peines">Peines</NavLink>
        </>
      )}
      <NavLink to="/nosotros">Nosotros</NavLink>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;